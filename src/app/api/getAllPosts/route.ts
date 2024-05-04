import { getAllPosts } from "@/lib/api";

export async function GET(request: any) {
  console.log("It works!");
  const { searchParams }: { searchParams : URLSearchParams}  = new URL(request.url);
  const page:number = searchParams.get('page') !== null ? parseInt(searchParams.get('page')!.toString()) : 1;
  const posts = getAllPosts(page, parseInt(process.env.PAGINATION_POST_LIMIT!) || 20);
  return new Response(JSON.stringify(posts));
}