import { Category } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import Container from "../_components/containers/Container";
import Sidebar from "../_components/Sidebar";

export default async function AboutPage() {
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

  return (
    <Container>
      <Sidebar
        categoriesCount={categoriesCount}
        recentPosts={allPosts.slice(0, 3)}
      />
      <div style={{ margin: "1rem" }}>
        <p>
          "Anteater의 블로그입니다. 나,{" "}
          <a href="https://github.com/anteater333" target="_blank">
            Anteater
          </a>
          는 개발자(자칭)로, 꿈은 없고요 그냥 놀고 싶습니다. 그래도 이렇게
          블로그 About 페이지 작성하고 있으니까 이 메타버스 시대의 싸이버
          스-페이쓰에 내 집 마련한 기분이라 좋네요. 아무튼, 나는 대놓고 사람을
          웃기는 편은 아니지만, 장난기가 미량 함유되어 있습니다. 시덥지 않은
          리그베다위키식 농담이 글에 조금씩 섞여있을 테니 양해 바라요. 😎" -
          Anteater, 2021년
        </p>

        <p>
          용케도 여기를 찾아내셨습니다. 지금보다 3살 더 어렸을 땐 내가 말을
          저렇게 했었네요. Jekyll 기반 블로그를 운영해온지도 어느덧 3년째,
          2024년 6월. 취직도 안되고... 살도 찌고... 그와중에 돈은 좀 벌어둬서
          뭔가 쫒기는 느낌은 덜들고... 매너리즘에 빠진 듯한 기분이라 Next.js로
          블로그를 이전하는 사업을 진행 중이에요. 홈페이지를 보셨으면 알겠지만,
          좀 휑합니다.
        </p>

        <img src="/Anteater_lab_v3/assets/blog/easter/egg.png" width="50%" />

        <p>
          이 감성으로 그냥 이대로 운영해볼까 싶기도 했는데, 이것도 벌써 5년 전
          농담거리더라구요. 아무튼, 이 블로그 아직 미완성이란 말을 멀리도 돌아
          하고 있습니다. 시작은 6월에 하긴 했는데, 솔직히 이것 저것 하다보니 (또
          이것 저것 딴짓도 하다 보니) 한 달 만에 완성할 자신은 없습니다. 노력은
          해볼게요. 디자인은 아무리 만져봐도 어려워서..
        </p>

        <p>
          아무튼, 이런 외진 곳까지 찾아와 이런 시시콜콜한 글을 끝까지 읽고 있는
          사람이라는 뜻은 저에 대해서 어느 정도 관심이 있다는 의미인 것으로
          받아들여도 되겠죠? 그런 의미에서, 제가 영화를 주제로 매주 소소하게
          가꾸고 있는 또다른 블로그가 있습니다. 거기도 한 번 찾아와 주십쇼..
          <a href="https://watchunduck.tistory.com/" target="_blank">
            <img
              src="/Anteater_lab_v3//assets/blog/easter/egg2.png"
              width="24px"
            ></img>
          </a>
        </p>

        <p>
          그리고 혹시라도 개발자 필요하시면 마음껏 연락 부탁드립니다.
          프론트엔드를 선호하고, Node.js 기반 백엔드도 할 줄 알아요.
        </p>

        <ul>
          <li>anteater1056@gmail.com</li>
          <li>010-4174-4150</li>
          <li>
            <a href="https://github.com/anteater333" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://past-silver-b67.notion.site/Lee-Jihoon-Anteater-42a1ebc80b2e44688f0dd99598f019de"
              target="_blank"
            >
              포트폴리오
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: `Anteater's laboratory`,
  description: `용케도 여기를 찾아내셨습니다.`,
};
