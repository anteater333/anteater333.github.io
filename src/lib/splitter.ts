/** markdown을 나타내는 슬러그를 blog.ver2에 대응하는 URL로 사용할 수 있도록 변환 */
export function splitSlugForURL(slug: string) {
  // 2024-05-30-micro-tip-16 => 2024/05/30/micro-tip-16
  const [year, month, day, ...title] = slug.split("-");

  return `${[year, month, day, title.join("-")].join("/")}.html`;
}

/** URL을 slug로 변환하는 함수 */
export function joinURLToSlug({
  category,
  year,
  month,
  day,
  slug,
}: {
  category: string;
  year: string;
  month: string;
  day: string;
  slug: string;
}) {
  return `${category}/${year}-${month}-${day}-${slug.split(".html")[0]}.md`;
}
