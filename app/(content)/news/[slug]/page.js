import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";
export default function NewsDetailPage({ params }) {
  const newsSLug = params.slug;
  const news = DUMMY_NEWS.find((news) => news.slug === newsSLug);

  if (!news) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${news.slug}/image`}>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </Link>
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
