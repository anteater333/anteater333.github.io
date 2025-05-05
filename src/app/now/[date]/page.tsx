import { Category } from "@/interfaces/post";
import {
  getAllArcivedNowPages,
  getAllPosts,
  getArchivedNowPageByDate,
} from "@/lib/api";
import { Metadata } from "next";
import Container from "@/app/_components/containers/Container";
import Sidebar from "@/app/_components/Sidebar";
import { PostBody } from "@/app/_components/PostBody";
import markdownToHtml from "@/lib/markdownToHtml";
import PostContainer from "@/app/_components/containers/PostContainer";
import Catchphrase from "@/app/_components/Catchphrase";
import NowPagination from "@/app/_components/NowPagination";

export default async function NowPage({ params }: Params) {
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

  const { date } = params;

  const nowPage = getArchivedNowPageByDate(date);
  const archivedNowPage = getAllArcivedNowPages();
  const currentIndex = archivedNowPage.findIndex((d) => d === date);
  const nowContent = await markdownToHtml(nowPage);

  return (
    <Container>
      <Sidebar
        categoriesCount={categoriesCount}
        recentPosts={allPosts.slice(0, 3)}
      />
      <PostContainer>
        <article>
          <div className="post-body">
            <PostBody content={nowContent} />
          </div>
          <div className="post-tail">
            <NowPagination
              prev={archivedNowPage[currentIndex - 1]}
              next={
                currentIndex + 1 === archivedNowPage.length
                  ? "head"
                  : archivedNowPage[currentIndex + 1]
              }
            />
            <Catchphrase />
          </div>
        </article>
      </PostContainer>
    </Container>
  );
}

type Params = {
  params: {
    index: number;
    date: string;
  };
};

export const metadata: Metadata = {
  title: `Anteater's laboratory`,
  description: `용케도 여기를 찾아내셨습니다.`,
};

export async function generateStaticParams() {
  const dates = getAllArcivedNowPages();

  return dates.map((date) => ({ date }));
}

