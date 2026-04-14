
"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";
import { INITIAL_ARTICLES } from "./lib/data";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const featuredArticle = INITIAL_ARTICLES[0];
  const trendingArticles = INITIAL_ARTICLES.filter(a => a.trending).slice(1);
  const recentArticles = INITIAL_ARTICLES.slice(2);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Berhasil Berlangganan!",
      description: "Terima kasih, ringkasan berita akan dikirim ke " + email,
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30">
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
                <h2 className="text-xl font-black font-headline tracking-tight uppercase">BERITA TERBARU</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recentArticles.map(article => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            <section className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black font-headline text-primary tracking-tight uppercase">EKONOMI & BISNIS</h2>
                <Link href="/category/Ekonomi">
                  <Button variant="outline" size="sm" className="rounded-full bg-white hover:bg-primary hover:text-white transition-all">
                    Lihat Semua
                  </Button>
                </Link>
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
                <h2 className="text-lg font-black font-headline tracking-tight uppercase">SEDANG TREN</h2>
              </div>
              <div className="space-y-6">
                {trendingArticles.map((article, idx) => (
                  <Link key={article.id} href={`/article/${article.id}`} className="flex gap-4 items-start group">
                    <span className="text-3xl font-black text-muted-foreground/30 group-hover:text-accent transition-colors">0{idx + 1}</span>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest">{article.category}</p>
                      <h3 className="font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 text-sm">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="sticky top-24">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white text-center shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 p-4 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                
                <Mail className="h-10 w-10 mx-auto mb-4 text-white/90" />
                <h3 className="text-xl font-black mb-3 font-headline tracking-tight uppercase">Newsletter Kilat</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">Poin-poin penting berita terpercaya langsung ke email Anda setiap pagi pukul 07:00.</p>
                
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                  <Input 
                    type="email" 
                    required
                    placeholder="Alamat email Anda" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-white/50 border-2"
                  />
                  <Button type="submit" className="w-full bg-white text-primary font-black hover:bg-secondary transition-all py-6 shadow-lg">
                    DAFTAR SEKARANG
                  </Button>
                </form>
                <p className="text-[10px] text-white/50 mt-4">Tanpa spam. Berhenti berlangganan kapan saja.</p>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
