import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

const getPostData = (fileIdentifier) => {
  const postSlug = fileIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};

// no extension
const getFeaturedPostsFiles = () => {
  const featuredPosts = getFeaturedPosts();
  const featuredSlugs = featuredPosts.map((post) => post["slug"]);

  return featuredSlugs;
};

export {
  getPostsFiles,
  getFeaturedPostsFiles,
  getPostData,
  getAllPosts,
  getFeaturedPosts,
};
