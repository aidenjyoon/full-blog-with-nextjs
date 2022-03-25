import ReactMarkdown from "react-markdown";

import styles from "./PostContent.module.scss";
import PostHeader from "./PostHeader";

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <>
      <article className={styles.content}>
        <PostHeader title={post.title} image={imagePath} />

        {/* used ReactMarkdown to make content markdown formatted */}
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </>
  );
};

export default PostContent;
