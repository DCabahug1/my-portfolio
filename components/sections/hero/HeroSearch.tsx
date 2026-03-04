import { motion } from "motion/react";
import { fadeUp } from "./variants";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Bot, Search, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { getAIResponse } from "@/lib/ai-response";

const exampleQueries = [
  "Tell me about your latest project...",
  "What technologies do you work with?",
  "What's your work experience?",
  "What made you choose computer science?",
];



function HeroSearch() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim().length === 0) return;
    setIsOpen(true);
    setIsLoading(true);
    setResponse("");

    try {
      const result = await getAIResponse(query);
      setResponse(result);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setResponse("Sorry, I couldn't process your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
            className="bg-transparent outline-none border-none w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {!query && (
            <span className="pointer-events-none absolute inset-0 flex items-center gap-1 text-muted-foreground text-sm text-nowrap overflow-hidden">
              Ask <span className="text-primary">DuaneAI</span>
              <Sparkles className="size-3 fill-current text-primary min-w-3 min-h-3" />:&nbsp;
              <TypeAnimation
                sequence={exampleQueries.flatMap((q) => [q, 2000])}
                repeat={Infinity}
                cursor={true}
                wrapper="span"
              />
            </span>
          )}
        </div>
        <Button type="submit" variant="ghost" size="icon">
          <ArrowRight className="text-muted-foreground" />
        </Button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90svh] flex flex-col gap-0 p-0 overflow-hidden">
          {/* Header */}
          <div className="border-b border-border px-6 py-4 shrink-0">
            <DialogHeader>
              <DialogTitle asChild>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold text-primary">DuaneAI</span>
                  <Sparkles className="size-4 fill-current text-primary" />
                </div>
              </DialogTitle>
            </DialogHeader>
          </div>

          {/* Body */}
          <div className="flex-1 min-h-0 overflow-y-auto px-6 py-5 flex flex-col gap-3">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              You asked
            </p>
            <p className="text-base font-semibold text-foreground">{query}</p>
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
                  li: ({ children }) => (
                    <li className="text-sm">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                }}
              >
                {response}
              </ReactMarkdown>
            )}
          </div>

          {/* Footer */}
          <DialogFooter className="px-6 py-4 border-t border-border shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}

export default HeroSearch;
