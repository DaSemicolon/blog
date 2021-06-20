import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import MainLayout from "../../layout/main";
import Tag from "../../components/tag";
import { getAllBlogPostIds, getPostByUID } from "../../utils/blog-post";
import style from "./index.module.scss";

const Post: NextPage<{blogPost: PrismicNodeBlogPost}> = ({blogPost}) => {
  const title = RichText.asText(blogPost.title) || "Untitled";
  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Learn how to use the most common JavaScript array methods, such as map, filter, and reduce. We'll go over each method in detail, including examples and manual alternatives. You'll also learn when not to employ these techniques." />
      </Head>
      <h1>{title}</h1>
      <div className={style.author}>{RichText.asText(blogPost.author.name)} | {new Date(blogPost._meta.firstPublicationDate).toDateString()}</div>
      {
        <div className={style.tagContainer}>
          {
            blogPost._meta.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))
          }
        </div>
          
      }
      {RichText.render(blogPost.content)}
    </MainLayout>);
}; 

export const getStaticProps: GetStaticProps = async (context) => {
  const uid = context.params.uid as string;
  const blogPost = await getPostByUID(uid);

  return {
    props: {
      blogPost,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const uids = await getAllBlogPostIds();

  return {
    paths: uids.map((uid) => `/blog/${uid}`),
    fallback: false,
  };
};

export default Post;
