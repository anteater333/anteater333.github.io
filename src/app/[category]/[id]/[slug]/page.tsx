import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/Container";
import { analyzePost } from "@/lib/postAnalyzer";

/**
 * 블로그 게시글 페이지
 */
export default async function Post({ params }: Params) {
  const { category, id, slug } = params;

  const post = getPostBySlug(`${category}/${id}/${slug}`);

  if (!post) return notFound();

  const content = await markdownToHtml(post.content || "");

  const postInfo = analyzePost(content);
  console.log(postInfo);

  return (
    <main>
      {/* <Container>
        <div>
          <Sidebar />
          <article>
            <ReadingHeader />
            <PostHeader />
            <PostBody />
            <PostTags />
            <Comment />
            <Catchphrase />
          </article>
        </div>
      </Container> */}

      {/* Legacy 코드 */}
      {/* <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container> */}
    </main>
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
