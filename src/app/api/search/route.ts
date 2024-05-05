import { getSpecialPosts } from "@/lib/api";

export async function GET(request: any) {
  console.log("It works!");
  const { searchParams }: { searchParams : URLSearchParams}  = new URL(request.url);
  const limit = parseInt(process.env.PAGINATION_POST_LIMIT!) || 20;
  const page:number = parseInt(request.query.page.toString()) || 1 ;
  const query: string = request.query.string.toString() || "" ;
  const posts = getSpecialPosts(query, page, limit);
  console.log(page);
  return new Response(JSON.stringify(posts));
}
