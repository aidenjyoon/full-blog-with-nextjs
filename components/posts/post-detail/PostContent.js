import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import styles from "./PostContent.module.scss";
import PostHeader from "./PostHeader";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = (props) => {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  // custom html components for ReactMarkdown
  const customComponents = {
    // // to get rid of warnings caused by having <div>s in <p>
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    // replace <p> with <div> to post image
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <>
      <article className={styles.content}>
        <PostHeader title={post.title} image={imagePath} />

        {/* used ReactMarkdown to make content markdown formatted */}
        <ReactMarkdown components={customComponents}>
          {post.content}
        </ReactMarkdown>
      </article>
    </>
  );
};

export default PostContent;
