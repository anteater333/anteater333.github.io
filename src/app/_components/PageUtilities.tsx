"use client";

import { useDarkMode } from "@/lib/store";
import { scOnHalf, scOnPalm } from "@/styles/values";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import styled from "styled-components";

const PageUtilitiesDiv = styled.div`
  @media ${scOnHalf} {
  }
  @media ${scOnPalm} {
    opacity: 0.2;
  }

  z-index: 100;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;

  border: solid 1px var(--border-color);
  border-radius: 0.25rem;
  overflow: visible;

  opacity: 0.33;

  background-color: var(--static-white);

  .util-button {
    height: 2.5rem;
    width: 2.5rem;
    > img {
      width: 100%;
      height: 100%;
    }

    &.menu {
      @media ${scOnHalf} {
        display: unset;
      }
      display: none;
      padding: 0.25rem;
    }

    &.lumin {
      @media ${scOnHalf} {
        border-top: solid 1px var(--border-color);
      }
      padding: 0.25rem;
    }

    &.share {
      padding: 0.25rem;
      border-top: solid 1px var(--border-color);
    }

    &.upper {
      img {
        /* ::before 위치로 인해 별도 조정 */
        box-sizing: border-box;
        padding: 0.5rem;
      }
      border-top: solid 1px var(--border-color);
    }

    &::before {
      font-size: 0.9rem;
      content: attr(data-hint);
      position: absolute;
      right: 50%;
      width: 2.75rem;
      opacity: 0;
      margin-top: 0.5rem;

      background-color: var(--bg-color-main);
      border: solid 1px var(--border-color);
      border-radius: 0.25rem;

      transition: all 0.1s ease-in-out;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover::before {
        opacity: 0.8;
        transform: translateX(-2rem);
      }
    }
  }
`;

export default function PageUtilities() {
  const router = useRouter();

  const { isDarkMode, toggleDark } = useDarkMode();

  return (
    <PageUtilitiesDiv>
      <button
        data-hint={"메뉴"}
        className="util-button menu"
        onClick={() => {
          // <Sidebar/> 컴포넌트에서 이 이벤트를 감지
          document.dispatchEvent(new Event("menu"));
        }}
      >
        <img src="/assets/pictures/utils/menu.svg" />
      </button>
      <button
        data-hint={isDarkMode ? "밝게" : "어둡게"}
        className="util-button lumin"
        onClick={() => {
          toggleDark();
        }}
      >
        <img
          src={
            isDarkMode
              ? "/assets/pictures/utils/light.svg"
              : "/assets/pictures/utils/dark.svg"
          }
        />
      </button>
      <button
        data-hint={"공유"}
        className="util-button share"
        onClick={() => {
          window.navigator.clipboard.writeText(
            window.location.href.split(`#`)[0]
          );
          toast("주소를 복사했습니다.", {
            position: "bottom-center",
            autoClose: 1000,
          });
        }}
      >
        <img src="/assets/pictures/utils/share.svg" />
      </button>
      <button
        data-hint={"위로"}
        className="util-button upper"
        onClick={() => {
          router.push(window.location.href.split("#")[0]);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <img src="/assets/pictures/utils/upper.svg" />
      </button>
    </PageUtilitiesDiv>
  );
}
