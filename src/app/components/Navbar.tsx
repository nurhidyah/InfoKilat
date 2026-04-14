
"use client";

import Link from "next/link";
import { Search, Menu, User, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: "Politik", href: "/category/Politik" },
    { name: "Ekonomi", href: "/category/Ekonomi" },
    { name: "Teknologi", href: "/category/Teknologi" },
    { name: "Olahraga", href: "/category/Olahraga" },
    { name: "Hiburan", href: "/category/Hiburan" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:bg-accent transition-colors">
                <Zap className="h-6 w-6 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-headline font-black tracking-tighter text-primary">INFOKILAT</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-primary transition-colors font-bold"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2 animate-in slide-in-from-right-4 duration-200">
                <Input
                  autoFocus
                  type="search"
                  placeholder="Cari berita..."
                  className="w-40 sm:w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="button" variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}
            
            <Link href="/admin">
              <Button variant="ghost" size="icon" title="Admin Panel">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-left font-black text-2xl tracking-tighter text-primary flex items-center gap-2">
                    <Zap className="h-6 w-6 fill-current" />
                    INFOKILAT
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-2">Kategori Utama</p>
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      className="text-lg font-bold hover:text-primary px-2 py-2 rounded-lg hover:bg-secondary transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="mt-8 pt-8 border-t">
                    <Link href="/admin">
                      <Button className="w-full justify-start gap-3" variant="outline">
                        <User className="h-4 w-4" /> Masuk Admin
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
