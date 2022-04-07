import Head from "next/head";

import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostPage = (props) => {
  const { allPosts } = props;

  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={allPosts} />
    </>
  );
};

const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
};

export { getStaticProps };
export default AllPostPage;
