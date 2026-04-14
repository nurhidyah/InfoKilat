
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";
import { INITIAL_ARTICLES } from "./lib/data";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock } from "lucide-react";

export default function Home() {
  const featuredArticle = INITIAL_ARTICLES[0];
  const trendingArticles = INITIAL_ARTICLES.filter(a => a.trending).slice(1);
  const recentArticles = INITIAL_ARTICLES.slice(2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <NewsCard article={featuredArticle} featured={true} />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <div className="flex items-center gap-2 mb-6 border-b pb-2">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-black font-headline">BERITA TERBARU</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recentArticles.map(article => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            <section className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black font-headline text-primary">EKONOMI & BISNIS</h2>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">Lihat Semua</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {INITIAL_ARTICLES.filter(a => a.category === 'Ekonomi').slice(0, 2).map(article => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-12">
            <section className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-accent" />
                <h2 className="text-lg font-black font-headline">SEDANG TREN</h2>
              </div>
              <div className="space-y-6">
                {trendingArticles.map((article, idx) => (
                  <div key={article.id} className="flex gap-4 items-start group">
                    <span className="text-3xl font-black text-muted-foreground/30 group-hover:text-accent transition-colors">0{idx + 1}</span>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-accent uppercase tracking-wider">{article.category}</p>
                      <h3 className="font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        <a href={`/article/${article.id}`}>{article.title}</a>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="sticky top-24">
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 text-white text-center shadow-lg">
                <h3 className="text-xl font-black mb-3 font-headline">Langganan Newsletter</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">Dapatkan ringkasan berita terpercaya langsung ke email Anda setiap pagi.</p>
                <div className="flex flex-col gap-3">
                  <input 
                    type="email" 
                    placeholder="Alamat email Anda" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-primary font-black py-2 rounded-lg hover:bg-secondary transition-colors">DAFTAR SEKARANG</button>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
