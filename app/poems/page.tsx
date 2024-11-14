import { Card } from "@/components/ui/card";
import { poems } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PoemsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="container px-4 py-16 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center font-libre tracking-tight">
          Poems
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {poems.map((poem) => (
            <Card key={poem.slug} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <Link href={`/poems/${poem.slug}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={poem.image}
                    alt={poem.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {poem.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground whitespace-pre-line line-clamp-4">
                    {poem.excerpt}
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