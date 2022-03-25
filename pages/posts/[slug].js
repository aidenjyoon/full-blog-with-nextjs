import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData } from "../../helpers/posts-util";

const PostDetailPage = (props) => {
  return (
    <>
      <PostContent />
    </>
  );
};

const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
};

export default PostDetailPage;
