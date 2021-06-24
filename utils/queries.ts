import gql from "graphql-tag";

export const documentIds = gql`
  query getBlogPosts($after: String) {
    allBlogPosts(after: $after) {
      totalCount
      edges {
        node {
          _meta {
            uid
            tags
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const recentBlogPosts = gql`
  query getRecentBlogPosts ($after: String) {
    allBlogPosts(sortBy: meta_firstPublicationDate_DESC, after: $after) {
      edges {
        node {
          title
          description
          stack_icon
          _meta {
            tags
            uid
            firstPublicationDate
          }
        }
      }
    }
  }
`;

export const documentByUid = gql`
  query getBlogPostByUid($uid: String!) {
    blogPost(uid: $uid, lang: "en-gb") {
      title
      stack_icon
      cover_image
      content
      description
      authors {
        ...on Author {
          name
        }
      }
      _meta {
        tags
        lang
        firstPublicationDate
      }
    }
  }
`;
