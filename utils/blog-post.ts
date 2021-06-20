import { client } from "./graphql-client";
import { getDocumentByUid, getDocumentIds } from "./queries";

export const getAllBlogPostIds = async (afterCursor?: string): Promise<Array<string>> => {
  const blogPosts = await client.query<{ allBlogPosts: BlogPostConnection}>({
    query: getDocumentIds,
    variables: {
      after: afterCursor || null, 
    }
  });

  if (blogPosts.data.allBlogPosts.pageInfo.hasNextPage) {
    return await getAllBlogPostIds((blogPosts.data.allBlogPosts.pageInfo.endCursor));
  }

  console.log("posts", blogPosts);
  return blogPosts.data.allBlogPosts.edges.map((edge) => edge.node._meta.uid);
};

export const getPostByUID = async (uid: string, lang = "en-gb"): Promise<PrismicNodeBlogPost | null> => {
  const post = await client.query<{blogPost: PrismicNodeBlogPost}>({
    query: getDocumentByUid,
    variables: {
      uid,
      lang
    }
  });

  return post.data.blogPost;
};
