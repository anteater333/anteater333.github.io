import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getAllLegacyURL, getNewURL } from "@/lib/legacyApi";

/**
 * v2 방식의 URL로 접근한 페이지. 신규 URL로 리다이렉션 해준다.
 */
export default async function PostWithLegacyURL({ params }: Params) {
  const {
    category,
    id: year,
    slug: month,
    legacyParam: day,
    legacySlug: slug,
  } = params;
  const newURL = getNewURL(`${category}/${year}/${month}/${day}/${slug}`);

  if (!newURL) {
    return notFound();
  }

  redirect(newURL);
}

type Params = {
  params: {
    category: string;
    id: string;
    slug: string;
    legacyParam: string;
    legacySlug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const {
    category,
    id: year,
    slug: month,
    legacyParam: day,
    legacySlug: slug,
  } = params;
  const newURL = getNewURL(`${category}/${year}/${month}/${day}/${slug}`);

  if (!newURL) {
    return notFound();
  }

  const title = `Redirecting...`;

  return {
    title,
    description: `to ${newURL}`,
  };
}

export async function generateStaticParams() {
  const legacies = getAllLegacyURL();

  return legacies.map((legacy) => {
    const [category, year, month, day, slug] = legacy.split("/");
    return {
      category: category,
      id: year,
      slug: month,
      legacyParam: day,
      legacySlug: slug,
    };
  });
}
