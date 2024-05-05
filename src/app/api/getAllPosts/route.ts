import { getAllPosts } from "@/lib/api";

// TODO 用另一种方法 获取参数
export async function GET(request: any) {
  console.log("It works!");
  const page:number = request.query.page == undefined ? 1 : parseInt(request.query.page.toString());
  const posts = getAllPosts(page, parseInt(process.env.PAGINATION_POST_LIMIT!) || 20);
  return new Response(JSON.stringify(posts));
}