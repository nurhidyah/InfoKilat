
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsCard from "../../components/NewsCard";
import { INITIAL_ARTICLES } from "../../lib/data";
import { CATEGORIES } from "../../lib/types";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { name: string } }) {
  const categoryName = decodeURIComponent(params.name);
  
  // Basic validation against known categories
  const isValidCategory = CATEGORIES.some(c => c.toLowerCase() === categoryName.toLowerCase());
  
  if (!isValidCategory) {
    // We allow it if it exists in data even if not in types for flexibility
    const existsInArticles = INITIAL_ARTICLES.some(a => a.category.toLowerCase() === categoryName.toLowerCase());
    if (!existsInArticles) notFound();
  }

  const filteredArticles = INITIAL_ARTICLES.filter(
    (a) => a.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <header className="mb-12 border-b pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-10 bg-primary rounded-full" />
            <h1 className="text-4xl font-black font-headline uppercase tracking-tight">
              Kategori: {categoryName}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Menampilkan berita terbaru di sektor {categoryName} tahun 2026.
          </p>
        </header>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl p-20 text-center border-2 border-dashed">
            <h2 className="text-2xl font-bold mb-2">Belum ada berita</h2>
            <p className="text-muted-foreground">
              Maaf, belum ada berita tersedia untuk kategori ini saat ini.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
