import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Duane Cabahug",
  description: "",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} bg-background text-foreground antialiased relative font-sans overflow-y-auto transition-all duration-300`}
      >
        <script
          src="https://kit.fontawesome.com/43f035c78d.js"
          crossOrigin="anonymous"
        ></script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
