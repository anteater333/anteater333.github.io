import { Post } from "@/interfaces/post";
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import { join, sep } from "path";

const filenameToSlugMap: Record<string, string> = JSON.parse(
  readFileSync("ref/filenameToSlug.json").toString()
);
const slugToFilenameMap: Record<string, string> = JSON.parse(
  readFileSync("ref/slugToFilename.json").toString()
);

const postsDirectory = join(process.cwd(), "_posts");

const getCategories = () =>
  fs
    .readdirSync(postsDirectory)
    .filter((file) => fs.lstatSync(join(postsDirectory, file)).isDirectory());

export function getPostFilenamesByCategory(category: string) {
  return fs.readdirSync(join(postsDirectory, category));
}

export function getAllPostFilenames() {
  const filenames: string[] = [];
  getCategories().forEach((category) => {
    getPostFilenamesByCategory(category).forEach((filename) => {
      filenames.push(join(category, filename));
    });
  });
  return filenames;
}

export function getPostBySlug(slug: string) {
  const filePath = slugToFilenameMap[slug];
  const fullPath = join(postsDirectory, filePath);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug: data.slug.split(" ").join("-"),
    content,
  } as Post;
}

export function getAllPosts(): Post[] {
  const filenames = getAllPostFilenames();

  const posts = filenames
    .map((filename) => {
      return getPostBySlug(filenameToSlugMap[filename]);
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostsByCategory(category: string): Post[] {
  const slugs = getPostFilenamesByCategory(category).map((slug) =>
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
