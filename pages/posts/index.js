import { Navbar } from "@/components/navbar";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loader } from "@/components/loader";
import {
  Typography,
} from "@material-tailwind/react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const BLOGGER_API_URL = "https://www.googleapis.com/blogger/v3/blogs/831062794583421474/posts/";
const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;

export default function Post({ post_id }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!post_id) return;

    fetch(`${BLOGGER_API_URL}${post_id}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
  }, [post_id]);

  const fetchData = () => {
    if (post_id !== null) {
      setLoading(true);
      fetch(BLOGGER_API_URL + post_id + '?key=' + API_KEY)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  };

  function generateContentToRender() {
    if (loading === true) {
      return <Loader />;
    } else if (data !== null && !data.error) {
      return <>
        <Typography
          variant="h3"
          className="mb-3 font-bold"
          color="blue-gray"
        >
          {data.title}
        </Typography>
        <address class="flex items-center mb-6 not-italic">
          <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <div>
              <p class="text-base text-gray-500 dark:text-gray-400">{data.author.displayName}</p>
              <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate>{data.published}</time></p>
            </div>
          </div>
        </address>
        <Typography className="mb-8 font-normal text-blue-gray-500">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </Typography>
      </>
    }
  }
  const { t } = useTranslation();
  return (
    <>
      <section className="relative block h-[50vh]">
        <Navbar />
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/images/background1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 ">
                  <div className="justify-center py-4 pt-8 lg:pt-4">
                    {generateContentToRender()}
                  </div>
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

export async function getServerSideProps({ query }) {
  // Извличане на post_id от query параметрите
  const post_id = query.post_id;

  // Връщане на post_id като prop на страницата
  return { props: { post_id } };
}
