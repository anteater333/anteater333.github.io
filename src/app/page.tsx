import { getAllPosts } from "@/lib/api";
import Container from "./_components/containers/Container";
import HeroPost from "./_components/HeroPost";
import Sidebar from "./_components/Sidebar";
import { Category } from "@/interfaces/post";
import PostList from "./_components/PostList";
import PostListContainer from "./_components/containers/PostListContainer";
import Catchphrase from "./_components/Catchphrase";

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
    temp: 0,
  };
  allPosts.forEach((post) => categoriesCount[post.category]++);

  return (
    <main>
      <HeroPost posts={allPosts} />
      <Container>
        <Sidebar
          categoriesCount={categoriesCount}
          recentPosts={allPosts.slice(0, 3)}
        />
        <PostListContainer>
          {/* <TagFilter /> */}
          <PostList posts={allPosts} />
          <Catchphrase />
        </PostListContainer>
      </Container>

      {/* Legacy 코드 */}
      {/* <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          category={heroPost.category}
          excerpt={heroPost.excerpt}
          id={heroPost.id}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container> */}
    </main>
  );
}
