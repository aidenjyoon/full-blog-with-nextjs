import AllPosts from "../../components/posts/AllPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    exceprt:
      "NextJS is a React framework for production - it makes building fullstack React simple",
    date: "2022-3-21",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    exceprt:
      "NextJS is a React framework for production - it makes building fullstack React simple",
    date: "2022-3-21",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    exceprt:
      "NextJS is a React framework for production - it makes building fullstack React simple",
    date: "2022-3-21",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    exceprt:
      "NextJS is a React framework for production - it makes building fullstack React simple",
    date: "2022-3-21",
  },
];

const AllPostPage = (props) => {
  return (
    <>
      <AllPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default AllPostPage;