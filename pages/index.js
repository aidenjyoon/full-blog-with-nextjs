import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs1",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     exceprt:
//       "NextJS is a React framework for production - it makes building fullstack React simple",
//     date: "2022-3-21",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     exceprt:
//       "NextJS is a React framework for production - it makes building fullstack React simple",
//     date: "2022-3-21",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     exceprt:
//       "NextJS is a React framework for production - it makes building fullstack React simple",
//     date: "2022-3-21",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     exceprt:
//       "NextJS is a React framework for production - it makes building fullstack React simple",
//     date: "2022-3-21",
//   },
// ];

const HomePage = (props) => {
  const { posts } = props;

  return (
    <>
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
