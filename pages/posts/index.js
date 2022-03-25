import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostPage = (props) => {
  const { allPosts } = props;

  return (
    <>
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
