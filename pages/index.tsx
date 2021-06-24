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
      </Head>
      <div className={style.container}>
        <div className={style.introContainer}>
          <Intro />
        </div>
        <div className={style.button}>
          <Link href="/contact">
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
