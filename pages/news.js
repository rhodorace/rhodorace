import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

const BLOGGER_API_URL = "https://www.googleapis.com/blogger/v3/blogs/831062794583421474/posts?key=" + process.env.BLOGGER_API_KEY;

export const getServerSideProps = async () => {
  try {
    const res = await fetch(BLOGGER_API_URL);
    const news = await res.json();
    return { props: { news } }
  } catch (e) {
    return { props: {} };
  }
}

export default function News({ news }) {

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
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg" class="w-full" alt="Louvre" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="mb-3 text-lg font-bold">Няма намерени новини</h5>
      </div>
    </div>
  }

  function renderSingleArticle(article) {
    return (
      <div class="container my-24 mx-auto md:px-6">
        <div class="mb-6 flex flex-wrap">
          <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg" class="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
              </a>
            </div>
          </div>

          <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <h5 class="mb-3 text-lg font-bold">{article.title}</h5>

            <p class="mb-6 text-neutral-500 dark:text-neutral-300">

              <small>Публикувано на <u>{article.published}</u> от {article.author.displayName}</small>
            </p>
            <p class="text-neutral-500 dark:text-neutral-300 line-clamp-3">
              {article.content}
            </p>
          </div>
        </div>

      </div>);
  }

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
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                    </div>
                  </div>
                </div>
                <div class="container my-24 mx-auto md:px-6">
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
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}
