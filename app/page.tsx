import Image from "next/image";
import Link from "next/link";
import { Pen, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SubscribeForm } from "@/components/subscribe-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <main className="container px-4 py-16 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-40 h-40 mb-8 overflow-hidden rounded-full ring-4 ring-primary/20">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&h=200&auto=format&fit=crop"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <h1 className="mb-4 text-5xl font-bold tracking-tight font-libre text-primary">
            GBAMILA DARASIMI
          </h1>
          
          <p className="max-w-2xl mb-8 text-lg text-muted-foreground">
            Welcome to my little corner of the internet, where thoughts become words and stories come to life. 
            My name is Gbamila Darasimi, a writer with a love for storytelling in all its forms.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link href="/stories">
              <Button size="lg" className="gap-2 text-lg">
                <BookOpen className="w-5 h-5" />
                Read Stories
              </Button>
            </Link>
            <Link href="/poems">
              <Button size="lg" variant="outline" className="gap-2 text-lg">
                <Pen className="w-5 h-5" />
                View Poems
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 p-8 bg-white/50 dark:bg-neutral-900/50 rounded-xl shadow-lg backdrop-blur-sm">
          <h3 className="mb-6 text-2xl font-semibold text-center font-libre">
            Subscribe to my blog
          </h3>
          <SubscribeForm />
        </div>
      </main>
    </div>
  );
}