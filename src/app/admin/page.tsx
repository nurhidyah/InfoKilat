
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { INITIAL_ARTICLES } from "../lib/data";
import { Article, CATEGORIES } from "../lib/types";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Plus, Edit, Trash2, LayoutDashboard, FileText, Settings, BarChart, Save } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminPage() {
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [isNewDialogOpen, setIsNewDialogOpen] = useState(false);
  const { toast } = useToast();

  const deleteArticle = (id: string) => {
    setArticles(articles.filter(a => a.id !== id));
    toast({
      title: "Berita Dihapus",
      description: "Artikel telah berhasil dihapus dari sistem.",
      variant: "destructive",
    });
  };

  const handleSaveNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Berita Disimpan",
      description: "Artikel baru telah berhasil ditambahkan ke database (Simulasi).",
    });
    setIsNewDialogOpen(false);
  };

  const handleFeatureNotReady = (feature: string) => {
    toast({
      title: "Fitur Terbatas",
      description: `Halaman ${feature} saat ini masih dalam mode baca-saja.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Admin Sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden sticky top-24">
              <div className="p-6 bg-primary text-white">
                <h2 className="font-black text-xl font-headline tracking-tight">Admin Console</h2>
                <p className="text-xs text-white/70 italic">Selamat datang, Redaksi InfoKilat</p>
              </div>
              <nav className="p-2 space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-3 bg-secondary/50 text-primary font-bold">
                  <LayoutDashboard className="h-4 w-4" /> Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => handleFeatureNotReady("Draft")}>
                  <FileText className="h-4 w-4" /> Draft Berita
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => handleFeatureNotReady("Statistik")}>
                  <BarChart className="h-4 w-4" /> Statistik AI
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => handleFeatureNotReady("Pengaturan")}>
                  <Settings className="h-4 w-4" /> Pengaturan
                </Button>
              </nav>
            </div>
          </aside>

          {/* Main Table Area */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-2xl font-black font-headline tracking-tight uppercase">Manajemen Konten 2026</h1>
              
              <Dialog open={isNewDialogOpen} onOpenChange={setIsNewDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2 bg-accent hover:bg-accent/90 shadow-lg rounded-full px-6">
                    <Plus className="h-4 w-4" /> Tulis Berita Baru
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black font-headline text-primary">WORKSPACE EDITOR</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSaveNewArticle} className="space-y-6 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="font-bold">Judul Headline</Label>
                      <Input id="title" placeholder="Ketik judul berita yang menarik..." required className="border-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category" className="font-bold">Kategori</Label>
                        <Select required>
                          <SelectTrigger className="border-2">
                            <SelectValue placeholder="Pilih Kategori" />
                          </SelectTrigger>
                          <SelectContent>
                            {CATEGORIES.map(cat => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="author" className="font-bold">Penulis</Label>
                        <Input id="author" placeholder="Nama editor" required className="border-2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="excerpt" className="font-bold">Ringkasan Singkat (Lead)</Label>
                      <Input id="excerpt" placeholder="Ringkasan untuk kartu berita..." required className="border-2" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="body" className="font-bold">Isi Berita Lengkap</Label>
                      <Textarea id="body" placeholder="Tulis isi berita secara mendalam di sini..." className="min-h-[200px] border-2" required />
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline" onClick={() => setIsNewDialogOpen(false)}>Batal</Button>
                      <Button type="submit" className="bg-primary gap-2">
                        <Save className="h-4 w-4" /> Terbitkan Sekarang
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="bg-white rounded-xl shadow-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead className="w-[40%] font-bold">Judul Berita</TableHead>
                    <TableHead className="font-bold">Kategori</TableHead>
                    <TableHead className="font-bold">Tanggal</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                    <TableHead className="text-right font-bold">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {articles.map((article) => (
                    <TableRow key={article.id} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="font-medium">
                        <div className="space-y-1">
                          <p className="line-clamp-1 font-bold text-slate-800">{article.title}</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Editor: {article.author}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-bold">{article.category}</Badge>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {format(new Date(article.publishedAt), "dd MMM yyyy", { locale: idLocale })}
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-3">Live</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                            onClick={() => handleFeatureNotReady("Edit")}
                          >
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
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground px-2">
              <p>Menampilkan <strong>{articles.length}</strong> dari <strong>{articles.length}</strong> berita aktif</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled className="rounded-full px-4">Sebelumnya</Button>
                <Button variant="outline" size="sm" disabled className="rounded-full px-4">Berikutnya</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
