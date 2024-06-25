import { type Author } from "./author";

export type Post = {
  slug: string;
  category: string;
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
};
