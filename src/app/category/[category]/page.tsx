import Catchphrase from "@/app/_components/Catchphrase";
import Container from "@/app/_components/containers/Container";
import PostListContainer from "@/app/_components/containers/PostListContainer";
import LoadingPlaceholder from "@/app/_components/LoadingPlaceholder";
import PostList from "@/app/_components/PostList";
import Sidebar from "@/app/_components/Sidebar";
import { Category } from "@/interfaces/post";
import { getAllPosts, getCategories, getPostsByCategory } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import { Metadata } from "next";
import { Suspense } from "react";

/**
 * 카테고리별 게시글 페이지
 */
export default async function IndexByCategory({ params }: Params) {
  const allPosts = getAllPosts();
  /** 카테고리 별 게시글 수 */
  const categoriesCount: Record<Category, number> = {
    meta: 0,
    micro: 0,
    hack: 0,
    reddit: 0,
    memoir: 0,
    ndev: 0,
  };
  allPosts.forEach((post) => categoriesCount[post.category]++);

  const catPosts = getPostsByCategory(params.category);

  return (
    <Container>
      <Sidebar
        categoriesCount={categoriesCount}
        recentPosts={allPosts.slice(0, 3)}
      />
      <PostListContainer>
        <Suspense fallback={<LoadingPlaceholder />}>
          <PostList posts={catPosts} />
        </Suspense>
        <Catchphrase category={params.category as Category} />
      </PostListContainer>
    </Container>
  );
}

type Params = {
  params: {
    category: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const { category } = params;

  const title = `${category} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    description: `Anteater's laboratory, articles of ${category}`,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const categories = getCategories();

  return categories.map((category, idx) => {
    return {
      category,
    };
  });
}
