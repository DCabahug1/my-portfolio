import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { GradientBackground } from "@/components/animate-ui/components/backgrounds/gradient";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Duane Cabahug",
  description: "",
  icons: "/images/Logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body
        className={`${poppins.variable} bg-black text-foreground antialiased h-[100svh] overflow-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GradientBackground className="absolute inset-0 flex items-center justify-center h-[100svh]" />
          <div className="relative z-10 font-sans overflow-y-auto h-[100svh]">
            <NavBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
