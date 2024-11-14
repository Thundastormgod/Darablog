import { poems } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return poems.map((poem) => ({
    slug: poem.slug,
  }));
}

export default function PoemPage({ params }: { params: { slug: string } }) {
  const poem = poems.find((p) => p.slug === params.slug);

  if (!poem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <article className="container max-w-4xl px-4 py-16 mx-auto">
        <Link href="/poems">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Poems
          </Button>
        </Link>
        
        <div className="relative w-full mb-8 aspect-video rounded-xl overflow-hidden shadow-xl">
          <Image
            src={poem.image}
            alt={poem.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <h1 className="mb-8 text-4xl font-bold text-center font-libre tracking-tight">
          {poem.title}
        </h1>
        
        <div className="prose prose-lg dark:prose-invert mx-auto bg-white/50 dark:bg-neutral-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm">
          <div className="whitespace-pre-line text-center text-neutral-800 dark:text-neutral-200 leading-relaxed">
            {poem.content}
          </div>
        </div>
      </article>
    </div>
  );
}