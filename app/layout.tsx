import "./globals.css";
import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Pen } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libre = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Gbamila Darasimi Blog",
  description: "A personal blog featuring stories and poems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, libre.variable)}>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
          <nav className="container flex items-center justify-between h-16 px-4 mx-auto">
            <Link href="/" className="text-xl font-bold font-libre text-primary">
              GBAMILA DARASIMI
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Home</span>
                </Button>
              </Link>
              <Link href="/stories">
                <Button variant="ghost" size="sm" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Stories</span>
                </Button>
              </Link>
              <Link href="/poems">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Pen className="w-4 h-4" />
                  <span className="hidden sm:inline">Poems</span>
                </Button>
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="py-8 text-center border-t bg-background/80 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gbamila Darasimi. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}