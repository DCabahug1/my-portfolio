import { motion } from "motion/react";
import { fadeUp } from "./variants";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Search, Send, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { getAIResponse, type ChatMessage } from "@/lib/ai-response";
import { Badge } from "@/components/ui/badge";

const STORAGE_KEY = "duaneai_messages";
const MAX_USER_MESSAGES = 20;

const CLOSING_LINES = [
  "That's my context window tapped out — glad we got to chat though.",
  "And that's all the memory I've got — context isn't cheap, you know.",
  "That's the last of my context — it's been real.",
  "Context limit reached. I'd remember more, but RAM is expensive.",
  "That's a wrap from me — context has its limits, and we just hit one.",
];

const exampleQueries = [
  "Tell me about your latest project...",
  "What technologies do you work with?",
  "What's your work experience?",
  "What made you choose computer science?",
];

function loadMessages(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function saveMessages(msgs: ChatMessage[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
}

function HeroSearch() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [followUpInput, setFollowUpInput] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const followUpRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages(loadMessages());
  }, []);

  useEffect(() => {
    if (!response) {
      setDisplayedResponse("");
      return;
    }

    if (intervalRef.current) clearInterval(intervalRef.current);

    const words = response.split(" ");
    let i = 0;
    setDisplayedResponse("");

    intervalRef.current = setInterval(() => {
      i++;
      setDisplayedResponse(words.slice(0, i).join(" "));
      if (i >= words.length) {
        clearInterval(intervalRef.current!);
      }
    }, 18);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [response]);

  // Focus follow-up input once response finishes animating
  useEffect(() => {
    if (!isLoading && isOpen && displayedResponse) {
      followUpRef.current?.focus();
    }
  }, [isLoading, isOpen, displayedResponse]);

  async function sendMessage(
    userContent: string,
    currentMessages: ChatMessage[],
  ) {
    const updatedMessages: ChatMessage[] = [
      ...currentMessages,
      { role: "user", content: userContent },
    ];
    const userCount = updatedMessages.filter((m) => m.role === "user").length;
    const isLastMessage = userCount >= MAX_USER_MESSAGES;

    setIsLoading(true);
    setResponse("");

    try {
      const mainResponse = await getAIResponse(updatedMessages, window.location.origin);
      const result = isLastMessage
        ? `${mainResponse}\n\n${CLOSING_LINES[Math.floor(Math.random() * CLOSING_LINES.length)]}`
        : mainResponse;
      setResponse(result);
      const finalMessages: ChatMessage[] = [
        ...updatedMessages,
        { role: "assistant", content: result },
      ];
      setMessages(finalMessages);
      saveMessages(finalMessages);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setResponse("Sorry, I couldn't process your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleClose() {
    setIsOpen(false);
    setMessages([]);
    setQuery("");
    setFollowUpInput("");
    setResponse("");
    setDisplayedResponse("");
    localStorage.removeItem(STORAGE_KEY);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim().length === 0) return;
    setIsOpen(true);
    setFollowUpInput("");
    await sendMessage(query.trim(), messages);
  };

  const handleFollowUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const text = followUpInput.trim();
    if (!text || isLoading) return;
    setQuery(text);
    setFollowUpInput("");
    await sendMessage(text, messages);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <motion.div
        className="flex items-center w-full gap-2 bg-card rounded-lg p-2 border-1 border-border"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
      >
        <Search className="text-muted-foreground" />
        <div className="relative flex-1">
          <input
            type="text"
            maxLength={100}
            className="bg-transparent outline-none border-none w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {!query && (
            <span className="pointer-events-none absolute inset-0 flex items-center gap-1 text-muted-foreground text-sm text-nowrap overflow-hidden">
              Ask{" "}
              <span className="bg-gradient-to-r from-primary to-pink-400 text-transparent bg-clip-text">
                DuaneAI
              </span>
              <Sparkles className="size-3 fill-current text-pink-400 min-w-3 min-h-3" />
              :&nbsp;
              <TypeAnimation
                sequence={exampleQueries.flatMap((q) => [q, 2000])}
                repeat={Infinity}
                cursor={true}
                wrapper="span"
              />
            </span>
          )}
        </div>
        <Button
          type="submit"
          variant={query.trim().length > 0 ? "default" : "ghost"}
          size="icon"
        >
          <ArrowRight
            className={
              query.trim().length > 0
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }
          />
        </Button>
      </motion.div>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) handleClose();
        }}
      >
        <DialogContent
          className="sm:max-w-lg max-h-[90svh] flex flex-col gap-0 p-0 overflow-hidden"
          onInteractOutside={(e) => e.preventDefault()}
        >
          {/* Header */}
          <div className="border-b border-border px-6 py-4 shrink-0">
            <DialogHeader>
              <DialogTitle asChild>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold bg-gradient-to-r from-primary to-pink-400 text-transparent bg-clip-text">
                      DuaneAI
                    </span>
                    <Sparkles className="size-4 fill-current text-pink-400" />
                  </div>

                  <Badge variant="outline" className="text-muted-foreground">
                    {messages.filter((m) => m.role === "user").length}/
                    {MAX_USER_MESSAGES} messages
                  </Badge>
                </div>
              </DialogTitle>
            </DialogHeader>
          </div>

          {/* Body */}
          <div className="flex-1 min-h-0 overflow-y-auto px-6 py-5 flex flex-col gap-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              You said
            </p>
            <p className="text-base font-semibold text-foreground text-wrap break-words">
              {query}
            </p>
            <div className="border-t border-border" />
            {isLoading ? (
              <div className="flex flex-col gap-2 pt-1">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-[85%]" />
                <Skeleton className="h-3.5 w-[90%]" />
                <Skeleton className="h-3.5 w-[70%]" />
              </div>
            ) : (
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="text-sm leading-relaxed text-muted-foreground mb-2 last:mb-0">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="text-sm leading-relaxed list-disc pl-4 mb-2 last:mb-0 space-y-1 text-muted-foreground">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="text-sm leading-relaxed list-decimal pl-4 mb-2 last:mb-0 space-y-1 text-muted-foreground">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="text-sm">{children}</li>,
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                }}
              >
                {displayedResponse}
              </ReactMarkdown>
            )}
          </div>

          {/* Footer */}
          <DialogFooter className="px-6 py-4 border-t border-border shrink-0">
            <form
              onSubmit={handleFollowUp}
              className="flex items-center gap-2 w-full"
            >
              {(() => {
                const limitReached =
                  messages.filter((m) => m.role === "user").length >=
                  MAX_USER_MESSAGES;
                return (
                  <>
                    <input
                      ref={followUpRef}
                      type="text"
                      maxLength={100}
                      placeholder={
                        limitReached ? "Message limit reached" : "Reply..."
                      }
                      className="flex-1 bg-muted rounded-md px-3 py-1.5 text-sm outline-none border border-transparent focus:border-border transition-colors placeholder:text-muted-foreground disabled:opacity-50"
                      value={followUpInput}
                      onChange={(e) => setFollowUpInput(e.target.value)}
                      disabled={isLoading || limitReached}
                    />
                    <Button
                      type="submit"
                      size="icon"
                      variant={
                        followUpInput.trim().length > 0 ? "default" : "ghost"
                      }
                      disabled={
                        isLoading ||
                        followUpInput.trim().length === 0 ||
                        limitReached
                      }
                    >
                      <Send className="size-4" />
                    </Button>
                  </>
                );
              })()}
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}

export default HeroSearch;
