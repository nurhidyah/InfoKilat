
"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import { INITIAL_ARTICLES } from "../lib/data";
import { Search as SearchIcon, Frown } from "lucide-react";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = INITIAL_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-black font-headline mb-2">Hasil Pencarian</h1>
          <p className="text-muted-foreground">
            {results.length > 0 
              ? `Menampilkan ${results.length} hasil untuk "${query}"`
              : `Tidak ditemukan hasil untuk "${query}"`}
          </p>
        </div>
        <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg text-primary text-sm font-bold">
          <SearchIcon className="h-4 w-4" />
          {query}
        </div>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
            <Frown className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-bold mb-2">Maaf, kami tidak dapat menemukan yang Anda cari</h2>
          <p className="text-muted-foreground max-w-md">
            Coba gunakan kata kunci yang berbeda atau periksa kategori berita lainnya.
          </p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Suspense fallback={<div>Memuat hasil pencarian...</div>}>
          <SearchResults />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
