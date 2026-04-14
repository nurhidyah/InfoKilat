
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { INITIAL_ARTICLES } from "../../lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Share2, ArrowLeft, Bookmark, MessageSquare, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import SummarizeButton from "./SummarizeButton";

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
                <Badge className="bg-primary hover:bg-primary">{article.category}</Badge>
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

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
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
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">#BeritaTerkini</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">#IndonesiaMaju</Badge>
                <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">#{article.category}</Badge>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <section className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-black font-headline mb-8 flex items-center gap-2">
              <div className="w-1.5 h-8 bg-accent rounded-full" />
              BACA JUGA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INITIAL_ARTICLES.filter(a => a.id !== article.id).slice(0, 2).map(related => (
                <Link key={related.id} href={`/article/${related.id}`} className="group flex gap-4 bg-card rounded-xl p-3 border shadow-sm hover:shadow-md transition-all">
                  <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                    <Image src={related.imageUrl} alt={related.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-wider mb-1">{related.category}</p>
                    <h3 className="text-sm font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">{related.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
