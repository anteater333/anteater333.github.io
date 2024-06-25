import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getPostsByCategory } from "@/lib/api";
import { CATEGORIES, CMS_NAME } from "@/lib/constants";
import { Metadata } from "next";

export default async function IndexByCategory({ params }: Params) {
  const allPosts = getPostsByCategory(params.category);

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
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
      </Container>
    </main>
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
  return CATEGORIES.map((category, idx) => {
    return {
      category,
    };
  });
}
