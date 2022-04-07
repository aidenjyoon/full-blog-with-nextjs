import Head from "next/head";

import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";

const HomePage = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Aiden&apos;s Blog</title>
        <meta name="description" content="I post about web dev and ml" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 10000
  };
};

export { getStaticProps };
export default HomePage;
