import { getSpecialPosts } from "@/lib/api";

export async function GET(request: any) {
  console.log("It works!");
  const limit = parseInt(process.env.PAGINATION_POST_LIMIT!) || 20;
  const page:number = request.query.page == undefined ? 1 : parseInt(request.query.page.toString());
  const query:string = request.query.query == undefined ? "" :request.query.query;
  const posts = getSpecialPosts(query, page, limit);
  console.log(page);
  return new Response(JSON.stringify(posts));
}
