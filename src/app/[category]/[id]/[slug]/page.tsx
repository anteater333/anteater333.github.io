import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/containers/Container";
import { analyzePost } from "@/lib/postAnalyzer";
import Sidebar from "@/app/_components/Sidebar";
import { Category } from "@/interfaces/post";
import PostContainer from "@/app/_components/containers/PostContainer";
import Catchphrase from "@/app/_components/Catchphrase";
import PostHeader from "@/app/_components/PostHeader";
import ReadingHeader from "@/app/_components/ReadingHeader";
import PostBody from "@/app/_components/PostBody";
import PostTags from "@/app/_components/PostTags";
import Comment from "@/app/_components/Comment";

/**
 * 블로그 게시글 페이지
 */
export default async function Post({ params }: Params) {
  const allPosts = getAllPosts();

  /** 카테고리 별 게시글 수 */
  const categoriesCount: Record<Category, number> = {
    meta: 0,
    micro: 0,
    hack: 0,
    reddit: 0,
    memoir: 0,
    ndev: 0,
    temp: 0,
  };
  allPosts.forEach((post) => categoriesCount[post.category]++);

  const { category, id, slug } = params;

  const post = getPostBySlug(`${category}/${id}/${slug}`);

  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");

  const readingData = analyzePost(content);

  return (
    <Container>
      <Sidebar
        categoriesCount={categoriesCount}
        recentPosts={allPosts.slice(0, 3)}
      />
      <PostContainer>
        <ReadingHeader title={post.title} date={post.date} />
        <article>
          <PostHeader
            title={post.title}
            subtitle={post.subtitle}
            date={post.date}
            category={post.category}
            coverImage={post.coverImage}
            readingData={readingData}
          />
          <div className="post-body">
            <PostBody content={content} />
          </div>
          <div className="post-tail">
            <PostTags tags={post.tags} />
            <Comment />
            <Catchphrase />
          </div>
        </article>
      </PostContainer>
    </Container>
  );
}

type Params = {
  params: {
    slug: string;
    id: string;
    category: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const { category, id, slug } = params;

  const post = getPostBySlug(`${category}/${id}/${slug}`);

  if (!post) return notFound();

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    description: post.description,
    keywords: post.tags?.join(", "),
    openGraph: {
      title,
      images: [post.ogImage?.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => {
    const { category, id, slug } = post;
    return {
      category,
      id: `${id}`,
      slug,
    };
  });
}
