import { getAllPosts } from "@/lib/api";
import Container from "./_components/Container";

/**
 * 블로그 메인 페이지
 */
export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      {/* <Container>
        <HeroPost />
        <div>
          <Sidebar />
          <div>
            <TagFilter />
            <p />
            <PostList />
            <Catchphrase />
          </div>
        </div>
      </Container> */}

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
