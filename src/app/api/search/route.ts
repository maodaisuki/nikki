import { getSpecialPosts } from "@/lib/api";

export async function GET(request: any) {
  console.log("It works!");
  const limit = parseInt(process.env.PAGINATION_POST_LIMIT!) || 20;
  const { searchParams } = new URL(request.url);
  const query:string = searchParams.get('query')?.toString() || "";
  const page:number = parseInt(searchParams.get('page')!.toString()) || 1;
  const posts = getSpecialPosts(query, page, limit);
  console.log(page);
  return new Response(JSON.stringify(posts));
}
