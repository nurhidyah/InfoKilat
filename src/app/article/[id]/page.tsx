
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { INITIAL_ARTICLES } from "../../lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import SummarizeButton from "./SummarizeButton";
import ArticleActions from "./ArticleActions";
import { Toaster } from "@/components/ui/toaster";

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = INITIAL_ARTICLES.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  const publishedDate = new Date(article.publishedAt);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Kembali ke Beranda
            </Link>
          </div>

          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8 space-y-6">
              <div className="flex items-center gap-3">
                <Link href={`/category/${article.category}`}>
                  <Badge className="bg-primary hover:bg-primary/90 cursor-pointer">{article.category}</Badge>
                </Link>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {format(publishedDate, "EEEE, d MMMM yyyy", { locale: idLocale })}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black font-headline leading-tight tracking-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-6 py-4 border-y">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-foreground">{article.author}</p>
                    <p className="text-xs text-muted-foreground">Editor InfoKilat</p>
                  </div>
                </div>

                <ArticleActions title={article.title} />
              </div>
            </header>

            {/* Featured Image */}
            <figure className="relative aspect-[16/9] w-full mb-10 overflow-hidden rounded-2xl shadow-lg border">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                priority
                data-ai-hint="full news image"
              />
            </figure>

            {/* AI Summary Section */}
            <div className="mb-10">
              <SummarizeButton title={article.title} body={article.body} />
            </div>

            {/* Body Content */}
            <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed font-body">
              {article.body.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6">{paragraph}</p>
              ))}
            </div>

            {/* Tags / Footer */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-bold text-muted-foreground mr-2">Tags:</span>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">#Berita2026</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">#IndonesiaMaju</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">#{article.category}</Badge>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
