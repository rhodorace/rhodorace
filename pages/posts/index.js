import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
const BLOGGER_API_URL = "https://www.googleapis.com/blogger/v3/blogs/831062794583421474/posts/";
const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;

export default function Post() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const searchParams = useSearchParams();
  const post_id = searchParams.get('post_id');

  const fetchData = () => {
    setLoading(true);
    fetch(BLOGGER_API_URL + post_id + '?key=' + API_KEY)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // TODO do some input validation

  return (
    <>
      {loading ? (<div>Data loading</div>) : (<div>fetched data</div>)} 
      {/* <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div>
          {postData.content}
        </div>
      </article> */}
    </>
  );
}

