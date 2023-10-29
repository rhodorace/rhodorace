import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react'

const BLOGGER_API_URL = "https://www.googleapis.com/blogger/v3/blogs/831062794583421474/posts?key=" + process.env.NEXT_PUBLIC_BLOGGER_API_KEY;

export default function News() {
  const [news, setNews] = useState(null)

  useEffect(() => {
    fetch(BLOGGER_API_URL)
      .then((res) => res.json())
      .then((data) => {
        setNews(data)
      })
  }, [])
  function renderContent() {
    if (news && news.items && news.items.length > 0) {
      return renderNews(news.items);
    } else {
      return renderNoNews();
    }
  }

  function renderNews(news) {
    return news.map(item => renderSingleArticle(item));
  }

  function renderNoNews() {
    <div class="mb-6 flex flex-wrap">
      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">Няма намерени новини</h5>
      </div>
    </div>
  }

  function renderSingleArticle(article) {
    return (
      <div class="container my-24 mx-auto md:px-6">
        <Link href={{ pathname: '/posts', query: { post_id: article.id } }}>
          <div className="mb-6 flex flex-wrap">
            <div class="mb-6  w-full shrink-0 grow-0 basis-auto px-3 md:mb-0">
              <h5 class="mb-3 text-lg font-bold">{article.title}</h5>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                <small>Публикувано на <u>{article.published}</u> от {article.author.displayName}</small>
              </p>
              <p class="text-neutral-500 dark:text-neutral-300 line-clamp-3">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </p>
            </div>
          </div>
        </Link>
      </div>);
  }

  const { t } = useTranslation();

  return (
    <>
      <section className="relative block h-[50vh]">
        <Navbar />
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/images/mountain.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div class="container my-12 mx-auto md:px-6">
                  <section class="mb-32 text-center md:text-left">
                    <h2 class="mb-12 text-center text-3xl font-bold">Новини</h2>
                    {renderContent()}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const { locale } = context

  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  }
}