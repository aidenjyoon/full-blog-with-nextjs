import ReactMarkdown from "react-markdown";

import styles from "./PostContent.module.scss";
import PostHeader from "./PostHeader";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs1",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-3-21",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <>
      <article className={styles.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath} />

        {/* used ReactMarkdown to make content markdown formatted */}
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
      </article>
    </>
  );
};

export default PostContent;
