import { getAllPosts } from "@/lib/api";
import Container from "./_components/containers/Container";
import HeroPost from "./_components/HeroPost";
import Sidebar from "./_components/Sidebar";
import { Category } from "@/interfaces/post";
import PostList from "./_components/PostList";
import PostListContainer from "./_components/containers/PostListContainer";
import Catchphrase from "./_components/Catchphrase";
import TagFilter from "./_components/TagFilter";
import { Suspense } from "react";
import LoadingPlaceholder from "./_components/LoadingPlaceholder";

/**
 * 블로그 메인 페이지
 */
export default function Index() {
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

  /** 태그 목록 추출 */
  const allTagSet = new Set<string>();
  allPosts.forEach((post) => post.tags.forEach((tag) => allTagSet.add(tag)));
  const allTags = Array.from(allTagSet);

  return (
    <div className="blog-main-page">
      <HeroPost posts={allPosts} />
      <Container>
        <Sidebar
          categoriesCount={categoriesCount}
          recentPosts={allPosts.slice(0, 3)}
        />
        <PostListContainer>
          <Suspense fallback={<LoadingPlaceholder />}>
            <TagFilter tags={allTags} />
            <PostList posts={allPosts} />
          </Suspense>
          <Catchphrase />
        </PostListContainer>
      </Container>
    </div>
  );
}
