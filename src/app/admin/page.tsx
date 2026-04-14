
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { INITIAL_ARTICLES } from "../lib/data";
import { Article } from "../lib/types";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Plus, Edit, Trash2, LayoutDashboard, FileText, Settings, BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import Link from "next/link";

export default function AdminPage() {
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);

  const deleteArticle = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Admin Sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="p-6 bg-primary text-white">
                <h2 className="font-black text-xl font-headline tracking-tight">Admin Console</h2>
                <p className="text-xs text-white/70">Welcome back, Editor</p>
              </div>
              <nav className="p-2">
                <Button variant="ghost" className="w-full justify-start gap-3 bg-secondary/50 text-primary font-bold">
                  <LayoutDashboard className="h-4 w-4" /> Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <FileText className="h-4 w-4" /> Semua Berita
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <BarChart className="h-4 w-4" /> Statistik
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <Settings className="h-4 w-4" /> Pengaturan
                </Button>
              </nav>
            </div>
          </aside>

          {/* Main Table Area */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-black font-headline">Manajemen Konten</h1>
              <Button className="gap-2 bg-accent hover:bg-accent/90">
                <Plus className="h-4 w-4" /> Berita Baru
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="w-[400px]">Judul Berita</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="font-medium">
                        <div className="space-y-1">
                          <p className="line-clamp-1 font-bold">{article.title}</p>
                          <p className="text-xs text-muted-foreground">Oleh {article.author}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{article.category}</Badge>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {format(new Date(article.publishedAt), "dd/MM/yyyy", { locale: idLocale })}
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none">Published</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-destructive hover:bg-destructive/10"
                            onClick={() => deleteArticle(article.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground px-2">
              <p>Menampilkan {articles.length} dari {articles.length} berita</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Sebelumnya</Button>
                <Button variant="outline" size="sm" disabled>Berikutnya</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
