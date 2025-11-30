import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    const {
      content,
      author,
      date,
      title,
      data,
      description,
      like,
      watch,
      read,
      draft,
    } = matter(fileContents);

    return {
      slug,
      content,
      author,
      date,
      title,
      description,
      like,
      watch,
      read,
      draft,
      ...data,
    };
  });
};
