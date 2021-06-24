import { client } from "./graphql-client";
import { documentByUid, documentIds, recentBlogPosts } from "./queries";

export const getAllBlogPostIds = async (afterCursor?: string): Promise<Array<string>> => {
  const blogPosts = await client.query<{ allBlogPosts: BlogPostConnection}>({
    query: documentIds,
    variables: {
      after: afterCursor || null, 
    }
  });

  if (blogPosts.data.allBlogPosts.pageInfo.hasNextPage) {
    return await getAllBlogPostIds((blogPosts.data.allBlogPosts.pageInfo.endCursor));
  }

  return blogPosts.data.allBlogPosts.edges.map((edge) => edge.node._meta.uid);
};

export const getRecentBlogPosts = async (afterCursor?: string): Promise<Array<PrismicNodeBlogPost>> => {
  const blogPosts = await client.query<{ allBlogPosts: BlogPostConnection}>({
    query: recentBlogPosts,
    variables: {
      after: afterCursor || null, 
    }
  });

  return blogPosts.data.allBlogPosts.edges.map((edge) => edge.node);
};

export const getPostByUID = async (uid: string, lang = "en-gb"): Promise<PrismicNodeBlogPost | null> => {
  const post = await client.query<{blogPost: PrismicNodeBlogPost}>({
    query: documentByUid,
    variables: {
      uid,
      lang
    }
  });
  console.log("post", post.data.blogPost.description);

  return post.data.blogPost;
};
