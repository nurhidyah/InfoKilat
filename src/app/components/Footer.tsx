
import Link from "next/link";
import { Zap, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1 rounded-lg">
                <Zap className="h-5 w-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-black tracking-tighter text-primary">INFOKILAT</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sumber berita terpercaya Anda untuk informasi tercepat, akurat, dan mendalam. Mengabarkan dari seluruh penjuru dunia untuk Anda.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Kategori</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/category/Politik" className="hover:text-primary">Politik</Link></li>
              <li><Link href="/category/Ekonomi" className="hover:text-primary">Ekonomi</Link></li>
              <li><Link href="/category/Olahraga" className="hover:text-primary">Olahraga</Link></li>
              <li><Link href="/category/Teknologi" className="hover:text-primary">Teknologi</Link></li>
              <li><Link href="/category/Hiburan" className="hover:text-primary">Hiburan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-primary">Kontak</Link></li>
              <li><Link href="#" className="hover:text-primary">Karir</Link></li>
              <li><Link href="#" className="hover:text-primary">Panduan Komunitas</Link></li>
              <li><Link href="#" className="hover:text-primary">Pedoman Media Siber</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2024 InfoKilat Media Grup. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-primary">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-primary">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
