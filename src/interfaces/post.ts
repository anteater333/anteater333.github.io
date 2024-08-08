import { type Author } from "./author";

export type Category =
  | "meta"
  | "hack"
  | "memoir"
  | "micro"
  | "ndev"
  | "reddit"
  | "temp";

export type Post = {
  slug: string;
  category: Category;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
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
