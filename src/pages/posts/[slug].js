import { useRouter } from "next/router";
import { getPostBySlug, markdownToHtml, getAllPosts } from "../../utils";
import Layout from "../../components/Layout";
import Head from "next/head";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Head>
        <title>{post.title} - Tech Waffle</title>
        <link rel="icon" href="/waffle.ico" />
      </Head>
      <article className="flex flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">{post.title}</h1>
        </div>
        <div
          className="markdown min-w-full"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}