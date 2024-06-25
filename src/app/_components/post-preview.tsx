import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { splitSlugForURL } from "@/lib/splitter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  category: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          category={category}
          title={title}
          src={coverImage}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          href={`/${category}/${splitSlugForURL(slug)}`}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author?.name} picture={author?.picture} />
    </div>
  );
}