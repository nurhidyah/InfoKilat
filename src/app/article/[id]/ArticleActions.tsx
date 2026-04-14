
"use client";

import { Button } from "@/components/ui/button";
import { Share2, Bookmark, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface ArticleActionsProps {
  title: string;
}

export default function ArticleActions({ title }: ArticleActionsProps) {
  const { toast } = useToast();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link disalin!",
        description: "Tautan berita telah disalin ke papan klip Anda.",
      });
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Dihapus dari bookmark" : "Tersimpan!",
      description: isBookmarked 
        ? "Berita telah dihapus dari koleksi Anda." 
        : "Berita telah disimpan ke daftar bacaan Anda.",
    });
  };

  const handleComment = () => {
    toast({
      title: "Fitur Segera Hadir",
      description: "Sistem komentar sedang dalam pengembangan.",
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="ghost" 
        size="icon" 
        className="rounded-full hover:bg-primary/10" 
        onClick={handleShare}
      >
        <Share2 className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className={`rounded-full ${isBookmarked ? 'bg-primary/10 text-primary' : ''}`}
        onClick={handleBookmark}
      >
        <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="rounded-full"
        onClick={handleComment}
      >
        <MessageSquare className="h-4 w-4" />
      </Button>
    </div>
  );
}
