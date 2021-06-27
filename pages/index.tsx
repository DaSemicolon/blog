import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Button from "../components/button";
import PostSummary from "../components/post-summary";
import Intro from "../components/intro";
import MainLayout from "../layout/main";
import { getRecentBlogPosts } from "../utils/blog-post";
import style from "./index.module.scss";
import Link from "next/link";

const Home: NextPage<{recentPosts: Array<PrismicNodeBlogPost>}> = ({recentPosts}) =>     {
  return (
    <MainLayout>
      <Head>
        <title>dasemicolon.dev</title>
        <meta name="description" content="Hi! I'm Kavindu, A full stack developer specializing in the front-end. I have 7 years of experience developing scalable web and mobile apps using technologies like JavaScript, TypeScript, NodeJS, GraphQL, React, ReactNative, MySQL, MongoDB, AWS and many more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dasemicolon.dev/" />
        <meta property="og:title" content="dasemicolon.dev" />
        <meta property="og:image" content="https://images.prismic.io/dasemicolondev/d35a9248-8cbc-4d83-9aaf-7d6ddd6dade6_main-banner.png" />
        <meta property="og:description" content="Hi! I'm Kavindu, A full stack developer specializing in the front-end. I have 7 years of experience developing scalable web and mobile apps using technologies like JavaScript, TypeScript, NodeJS, GraphQL, React, ReactNative, MySQL, MongoDB, AWS and many more." />
        <meta property="og:site_name" content="dasemicolon.dev" />
      </Head>
      <div className={style.container}>
        <div className={style.introContainer}>
          <Intro />
        </div>
        <div className={style.button}>
          <Link href="/about">
            <Button type="PRIMARY">Hire Me</Button>
          </Link>
        </div> 
      </div>
      <div>
        <h1 className={style.postsTitle}>Recent Posts</h1>
        {
          recentPosts.map((post) => (
            <PostSummary blogPost={post} key={post._meta.uid} />
          ))
        }
      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = await getRecentBlogPosts();

  return {
    props: {
      recentPosts
    }
  };
};

export default Home;
