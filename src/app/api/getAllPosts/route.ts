import { getAllPosts } from "@/lib/api";

export async function GET(request: any) {
  console.log("It works!");
  // console.log(request.url);
  const { searchParams } = new URL(request.url);
  const page:number = parseInt(searchParams.get('page')!.toString()) || 1;
  // console.log(page);
  const posts = getAllPosts(page, parseInt(process.env.PAGINATION_POST_LIMIT!) || 20);
  return new Response(JSON.stringify(posts));
}