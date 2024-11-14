import { Card } from "@/components/ui/card";
import { stories } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="container px-4 py-16 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center font-libre tracking-tight">
          Short Stories
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Card key={story.slug} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <Link href={`/stories/${story.slug}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground line-clamp-3">
                    {story.excerpt}
                  </p>
                  <span className="inline-flex items-center text-primary hover:underline gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}