import { Category } from "@/interfaces/post";
import { getAllArcivedNowPages, getAllPosts, getNowPage } from "@/lib/api";
import { Metadata } from "next";
import Container from "@/app/_components/containers/Container";
import Sidebar from "@/app/_components/Sidebar";
import { PostBody } from "@/app/_components/PostBody";
import markdownToHtml from "@/lib/markdownToHtml";
import PostContainer from "@/app/_components/containers/PostContainer";
import Catchphrase from "@/app/_components/Catchphrase";
import NowPagination from "../_components/NowPagination";

export default async function NowPage() {
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

  const nowPage = getNowPage();
  const nowContent = await markdownToHtml(nowPage);

  const latestArchivedNowPage = getAllArcivedNowPages().pop();

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
            <NowPagination prev={latestArchivedNowPage} />
            <Catchphrase />
          </div>
        </article>
      </PostContainer>
    </Container>
  );
}

export const metadata: Metadata = {
  title: `Anteater's laboratory`,
  description: `용케도 여기를 찾아내셨습니다.`,
};

