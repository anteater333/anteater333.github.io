import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join, sep } from "path";

const postsDirectory = join(process.cwd(), "_posts");

const getCategories = () =>
  fs
    .readdirSync(postsDirectory)
    .filter((file) => fs.lstatSync(join(postsDirectory, file)).isDirectory());

export function getPostSlugsByCategory(category: string) {
  return fs.readdirSync(join(postsDirectory, category));
}

export function getPostSlugs() {
  const slugs: string[] = [];
  getCategories().forEach((category) => {
    getPostSlugsByCategory(category).forEach((slug) => {
      slugs.push(join(category, slug));
    });
  });
  return slugs;
}

export function getPostBySlug(slug: string) {
  const [category, filename] = slug.split(sep);
  const realSlug = filename.replace(/\.md$/, "");

  const fullPath = join(postsDirectory, category, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, category: category, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => {
      return getPostBySlug(slug);
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostsByCategory(category: string): Post[] {
  const slugs = getPostSlugsByCategory(category).map((slug) =>
    join(category, slug)
  );

  const posts = slugs
    .map((slug) => {
      return getPostBySlug(slug);
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
