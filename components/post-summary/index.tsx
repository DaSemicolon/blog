import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Tag from "../tag";
import style from "./index.module.scss";

const PostSummary: React.FC<{blogPost: PrismicNodeBlogPost}> = ({blogPost}) => (
  <Link href={`/blog/${blogPost._meta.uid}`}>
    <div key={blogPost._meta.uid} className={style.container}>
      <div className={style.stackImage}>
        <Image src={blogPost.stack_icon.url} alt={blogPost.stack_icon.alt} width={blogPost.stack_icon.dimensions.width} height={blogPost.stack_icon.dimensions.height} />      
      </div>
      <div className={style.textContainer}>
        <div className={style.title}>{RichText.asText(blogPost.title)}</div>
        <div className={style.date}>{new Date(blogPost._meta.firstPublicationDate).toDateString()}</div>
        <div className={style.tag}>
          {blogPost._meta.tags.map((tag) => (<Tag text={tag} key={tag} />))}   
        </div>
        <div className={style.description}>{RichText.asText(blogPost.description)}</div>
      </div>
    </div>
  </Link>  
);

export default PostSummary;
