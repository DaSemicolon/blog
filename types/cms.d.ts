/* eslint-disable @typescript-eslint/no-explicit-any */
/** stores pagination information */
declare type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

declare type PrismicMeta = {
  uid: string;
  tags: Array[string];
  firstPublicationDate: string;
}

declare type PrismicNodeBlogPost = {
  _meta: PrismicMeta;
  title: any;
  stack_icon: any;
  cover_image: any;
  content: any;
  author: {
    name: Array<any>
  }
}

declare type PrismicEdge<T> = {
  node: T;
}

declare type BlogPostConnection = {
  totalCount: number;
  pageInfo: PageInfo;
  edges: Array<PrismicEdge<PrismicNodeBlogPost>>;
}