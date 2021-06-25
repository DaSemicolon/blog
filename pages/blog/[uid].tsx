import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Elements, RichText } from "prismic-reactjs";
import MainLayout from "../../layout/main";
import Tag from "../../components/tag";
import { getAllBlogPostIds, getPostByUID } from "../../utils/blog-post";
import style from "./index.module.scss";
import React from "react";

const Post: NextPage<{blogPost: PrismicNodeBlogPost}> = ({blogPost}) => {
  const title = RichText.asText(blogPost.title) || "Untitled";
  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={RichText.asText(blogPost.description)} />
        <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert"></script>
      </Head>
      <h1 className={style.title}>{title}</h1>
      <div className={style.author}>{RichText.asText(blogPost.authors.name)} | {new Date(blogPost._meta.firstPublicationDate).toDateString()}</div>
      {
        <div className={style.tagContainer}>
          {
            blogPost._meta.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))
          }
        </div>
      }
      <RichText render={blogPost.content} htmlSerializer={(type, element, content, children, key) => {
        let props = {};

        switch(type) {
        case Elements.preformatted:
          props = {className: "prettyprint"};
          return React.createElement('pre', {...props, key}, React.createElement('code', {}, children));
        default:
          return null;
        }
      }} />
      {blogPost.codepen && <div className={style.codepen} dangerouslySetInnerHTML={{__html: blogPost.codepen.html}} />}
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
