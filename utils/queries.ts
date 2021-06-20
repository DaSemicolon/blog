import gql from "graphql-tag";

export const getDocumentIds = gql`
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

export const getDocumentByUid = gql`
  query getBlogPostByUid($uid: String!) {
    blogPost(uid: $uid, lang: "en-gb") {
      title
      stack_icon
      cover_image
      content
      author {
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
