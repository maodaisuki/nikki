import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postDirectoryPath = path.join(process.cwd(), "_posts");

export function getPostFile() {
  const files:any = [];
  const readDir = (dirpath:string) => {
    const subfiles = fs.readdirSync(dirpath);
    for(const file of subfiles) {
      const filePath = path.join(dirpath, file);
      if(fs.statSync(filePath).isDirectory()) {
        readDir(filePath);
      }
      else {
        files.push(filePath);
      }
    }
  }
  readDir(postDirectoryPath);
  return files;
}

export function getPostInfo(slug: string) {
  const link = path.basename(slug).replace(/\.md$/, "");
  const pathName = slug.replace(/\.md$/, "");
  const fullPath = `${pathName}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);
  data.date = new Date(data.date);
  data.date = data.date.toISOString().slice(0, 10);
  if(data.author == undefined) {
    data.author = process.env.AUTHOR || '无名氏';
  }
  return { ...data, content, link: link } as Post;
}

export function getAllPosts(page: number = 1, limit: number = 20) {
  const slugs = getPostFile();
  const posts = slugs
    .map((slug:string) => getPostInfo(slug))
    .sort((post1:Post, post2:Post) => (post1.date > post2.date ? -1 : 1))
    .slice((page - 1) * limit, page * limit);
  return posts;
}

export function getSpecialPosts(query: string = '', page: number = 1, limit: number = 20) {
  const slugs = getPostFile();
  const posts = slugs
    .map((slug:string) => getPostInfo(slug))
    // 检索内容、作者和标题
    .filter((post:Post) => post.content?.includes(query) || post.author?.includes(query) || post.title?.includes(query))
    .sort((post1:Post, post2:Post) => (post1.date > post2.date ? -1 : 1))
    .slice((page - 1) * limit, page * limit);
  return posts;
}