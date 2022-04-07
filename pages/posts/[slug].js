import Head from "next/head";

import PostContent from "../../components/posts/post-detail/PostContent";
import {
  getFeaturedPostsFiles,
  getPostData,
  getPostsFiles,
} from "../../helpers/posts-util";

const PostDetailPage = (props) => {
  const { post } = props;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="desciption" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    // refresh post every hour
    revalidate: 3600,
  };
};

// const getStaticPaths = () => {
//   const featuredSlugs = getFeaturedPostsFiles();

//   // featured posts paths
//   // const slugs = featuredPosts.map((fileName) => fileName.replace(/\.md$/, "")); // remove extensions from featured posts
//   const paths = featuredSlugs.map((slug) => ({ params: { slug: slug } }));

//   // will pre render few posts and generate on demand the rest
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// for pre-rendering all posts
const getStaticPaths = () => {
  const postFilesnames = getPostsFiles();

  // paths of all posts
  const slugs = postFilesnames.map((fileName) => fileName.replace(/\.md$/, "")); // remove extensions from featured posts
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));

  // will pre render all posts
  return {
    paths,
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };
export default PostDetailPage;
