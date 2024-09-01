export type Category = "meta" | "hack" | "memoir" | "micro" | "ndev" | "reddit";

export type Post = {
  slug: string;
  category: Category;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  description: string;
  tags: string[];
  content: string;
  id: string;
  preview?: boolean;
  subtitle?: string;
};
