
"use client";

import Link from "next/link";
import { Search, Menu, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

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
            <Link href="/category/Politik" className="hover:text-primary transition-colors">Politik</Link>
            <Link href="/category/Ekonomi" className="hover:text-primary transition-colors">Ekonomi</Link>
            <Link href="/category/Teknologi" className="hover:text-primary transition-colors">Teknologi</Link>
            <Link href="/category/Olahraga" className="hover:text-primary transition-colors">Olahraga</Link>
            <Link href="/category/Hiburan" className="hover:text-primary transition-colors">Hiburan</Link>
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
                  <span className="sr-only">Cancel</span>
                  &times;
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}
            
            <Link href="/admin">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
