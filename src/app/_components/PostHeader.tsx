"use client";

import { Category } from "@/interfaces/post";
import { PostAnalysis } from "@/lib/postAnalyzer";
import styled from "styled-components";
import DateFormatter from "./DateFormatter";
import { categoryConverter } from "@/lib/converter";
import { scOnHalf, scOnPalm } from "@/styles/values";
import TagItem from "./TagItem";

const PostHeaderSection = styled.section`
  @media ${scOnHalf} {
  }

  @media ${scOnPalm} {
    height: 20rem;
  }

  position: relative;
  width: 100%;
  height: 24rem;
  overflow: hidden;

  p {
    margin: 0;
  }

  .context-container {
    @media ${scOnHalf} {
    }

    @media ${scOnPalm} {
      padding: 0 1rem;
    }

    display: flex;
    flex-direction: column;
    position: relative;
    color: #ffffff;
    z-index: 50;

    padding: 0 3rem;
    margin-top: 7rem;

    .context-upper {
      @media ${scOnHalf} {
      }

      @media ${scOnPalm} {
        font-size: 0.75rem;
      }

      display: flex;
      justify-content: space-between;

      font-size: 0.9rem;
      margin-bottom: 0.5rem;

      > div {
        display: flex;
      }

      .analysis-container {
        img.analysis-icon {
          @media ${scOnHalf} {
          }

          @media ${scOnPalm} {
            height: 0.8rem;
            margin-right: 0.25rem;
          }

          margin-right: 0.5rem;
          height: 1.2rem;
        }
      }

      p.sep {
        @media ${scOnHalf} {
        }

        @media ${scOnPalm} {
          margin: 0 0.25rem;
        }
        margin: 0 0.5rem;
      }
    }

    h1 {
      margin: 0;
      width: 80%;
      max-width: 60rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      margin-bottom: 1rem;
    }

    .tag-list-container {
      display: flex;
      gap: 0.5rem;

      flex-wrap: wrap;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    .darken {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 75%);
    }
    .bg-image {
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media ${scOnHalf} {
    .context-container {
      @media ${scOnHalf} {
      }

      @media ${scOnPalm} {
        margin-top: 3rem;
      }

      margin-top: 6rem;

      .context-upper {
        flex-direction: column-reverse;
        gap: 0.5rem;
        margin-bottom: 0.25rem !important;
      }
    }

    h1 {
      width: 95% !important;
    }
  }

  @media ${scOnPalm} {
  }
`;

const PostHeader = function ({
  title,
  subtitle,
  date,
  category,
  coverImage,
  tags,
  readingData,
}: {
  title: string;
  subtitle?: string;
  date: string;
  category: Category;
  coverImage?: string;
  tags: string[];
  readingData: PostAnalysis;
}) {
  return (
    <PostHeaderSection>
      <div className="overlay">
        <div className="darken" />
        <img
          className="bg-image"
          src={coverImage ?? "/assets/pictures/placeholder-main-image.png"}
        />
      </div>
      <div className="context-container">
        <div className="context-upper">
          <div className="date-category-container">
            <DateFormatter dateString={date} />
            <p className="sep"> | </p>
            <a href={`/category/${category}`}>{categoryConverter(category)}</a>
          </div>
          <div className="analysis-container">
            <img
              className="analysis-icon"
              src="/assets/pictures/post/post-word.svg"
            />
            <p>{readingData.numOfWords.toLocaleString()} 단어</p>
            <p className="sep"> | </p>
            <img
              className="analysis-icon"
              src="/assets/pictures/post/post-img.svg"
            />
            <p>{readingData.numOfImages.toLocaleString()} 장</p>
            <p className="sep"> | </p>
            <img
              className="analysis-icon"
              src="/assets/pictures/post/post-code.svg"
            />
            <p>{readingData.numOfCodeBlocks.toLocaleString()} 타래</p>
            <p className="sep"> | </p>
            <img
              className="analysis-icon"
              src="/assets/pictures/post/post-time.svg"
            />
            <p>
              {readingData.estimatedTimeOfReading < 1
                ? "~1"
                : readingData.estimatedTimeOfReading.toLocaleString()}{" "}
              분
            </p>
          </div>
        </div>
        <h1>{title}</h1>
        {subtitle ? <p className="subtitle">{subtitle}</p> : undefined}
        <div className="tag-list-container">
          {tags.map((tag, idx) => {
            return (
              <TagItem
                key={`post-header-tag-item-${idx}`}
                tag={tag}
                isDark={true}
              />
            );
          })}
        </div>
      </div>
    </PostHeaderSection>
  );
};

export default PostHeader;
