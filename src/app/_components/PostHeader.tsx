"use client";

import { Category } from "@/interfaces/post";
import { PostAnalysis } from "@/lib/postAnalyzer";

const PostHeader = function ({}: {
  title: string;
  subtitle?: string;
  date: string;
  category: Category;
  readingData: PostAnalysis;
}) {
  return <></>;
};

export default PostHeader;
