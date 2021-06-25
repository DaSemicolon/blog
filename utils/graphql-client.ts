import { PrismicLink } from "apollo-link-prismic";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

export const client = new ApolloClient({
  link: PrismicLink({
    uri: process.env.GRAPHQL_BASEURL, 
    accessToken: process.env.API_ACCESS_TOKEN,
    repositoryName: "dasemicolon.dev"
  }),
  cache: new InMemoryCache(), 
});

export const linkResolver = (doc: {type: string, uid: string}): string => {
  if (doc.type === "blog-post") {
    return `/blog/${doc.uid}`; 
  }

  return `/`;
};

export const hrefResolver = (doc: {type: string }): string => {
  if (doc.type === "blog-post") {
    return `/blog/[uid]`; 
  }

  return `/`;
};


