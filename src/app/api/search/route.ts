import { getSpecialPosts } from "@/lib/api";

export async function GET(request: any) {
  console.log("It works!");
  const { searchParams }: { searchParams : URLSearchParams}  = new URL(request.url);
  const limit = parseInt(process.env.PAGINATION_POST_LIMIT!) || 20;
  const query: string = searchParams.get("query") !== null ? searchParams.get("query")!.toString() : "";
  const page: number = searchParams.get("page") !== null ? parseInt(searchParams.get("page")!.toString()) : 1;
  const posts = getSpecialPosts(query, page, limit);
  console.log(page);
  return new Response(JSON.stringify(posts));
}
