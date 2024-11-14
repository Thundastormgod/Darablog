import { stories } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <article className="container max-w-4xl px-4 py-16 mx-auto">
        <Link href="/stories">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Button>
        </Link>
        
        <div className="relative w-full mb-8 aspect-video rounded-xl overflow-hidden shadow-xl">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <h1 className="mb-8 text-4xl font-bold text-center font-libre tracking-tight">
          {story.title}
        </h1>
        
        <div className="prose prose-lg dark:prose-invert mx-auto bg-white/50 dark:bg-neutral-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm">
          {story.content.split('\n').map((paragraph, index) => (
            <p key={index} className="text-neutral-800 dark:text-neutral-200">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}