
import Image from "next/image";
import Link from "next/link";
import { Article } from "../lib/types";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { id as idLocale } from "date-fns/locale";

interface NewsCardProps {
  article: Article;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const publishedDate = new Date(article.publishedAt);

  if (featured) {
    return (
      <Link href={`/article/${article.id}`} className="group relative block overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-lg">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="news article hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 p-6 sm:p-10 w-full">
            <Badge className="mb-4 bg-accent text-accent-foreground border-none">
              {article.category}
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4 max-w-3xl font-headline">
              {article.title}
            </h2>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>Oleh {article.author}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{formatDistanceToNow(publishedDate, { addSuffix: true, locale: idLocale })}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.id}`} className="group flex flex-col gap-3 rounded-xl bg-card p-3 shadow-sm transition-all hover:shadow-md h-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint="news thumbnail"
        />
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="opacity-90 shadow-sm backdrop-blur">
            {article.category}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-1 pb-2">
        <h3 className="line-clamp-2 text-lg font-bold leading-tight transition-colors group-hover:text-primary font-headline">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{article.author}</span>
          <span>{formatDistanceToNow(publishedDate, { addSuffix: true, locale: idLocale })}</span>
        </div>
      </div>
    </Link>
  );
}
