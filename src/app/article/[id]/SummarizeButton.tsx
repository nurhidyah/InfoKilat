
"use client";

import { useState } from "react";
import { Sparkles, Loader2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { summarizeArticle } from "@/ai/flows/summarize-article-flow";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface SummarizeButtonProps {
  title: string;
  body: string;
}

export default function SummarizeButton({ title, body }: SummarizeButtonProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const result = await summarizeArticle({ title, body });
      setSummary(result.summary);
    } catch (error) {
      console.error("Failed to summarize:", error);
    } finally {
      setLoading(false);
    }
  };

  if (summary) {
    return (
      <Alert className="bg-accent/5 border-accent/20 border-2 rounded-2xl p-6 shadow-sm animate-in fade-in zoom-in duration-300">
        <Sparkles className="h-5 w-5 text-accent" />
        <AlertTitle className="text-accent font-black font-headline text-lg mb-2">RINGKASAN KILAT (AI)</AlertTitle>
        <AlertDescription className="text-foreground/80 leading-relaxed italic text-base">
          "{summary}"
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Button 
      onClick={handleSummarize}
      disabled={loading}
      variant="outline"
      className="w-full py-8 border-dashed border-2 hover:bg-accent/5 hover:border-accent group rounded-2xl transition-all"
    >
      <div className="flex items-center gap-3">
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin text-accent" />
        ) : (
          <Sparkles className="h-5 w-5 text-accent group-hover:scale-125 transition-transform" />
        )}
        <div className="text-left">
          <p className="font-black font-headline text-accent leading-none mb-1">Coba Ringkasan AI</p>
          <p className="text-xs text-muted-foreground font-medium">Dapatkan poin penting berita ini dalam hitungan detik</p>
        </div>
      </div>
      <ChevronRight className="ml-auto h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
    </Button>
  );
}
