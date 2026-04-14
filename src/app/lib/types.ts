
export type Category = 'Politik' | 'Olahraga' | 'Teknologi' | 'Ekonomi' | 'Hiburan' | 'Kesehatan' | 'Dunia';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  category: Category;
  author: string;
  publishedAt: string;
  imageUrl: string;
  trending?: boolean;
}

export const CATEGORIES: Category[] = [
  'Politik',
  'Olahraga',
  'Teknologi',
  'Ekonomi',
  'Hiburan',
  'Kesehatan',
  'Dunia',
];
