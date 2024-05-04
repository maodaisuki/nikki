import { getAllPosts } from "@/lib/api";
export const dynamic = 'force-dynamic';
export async function GET(request: any) {
  console.log("It works!");
  const { searchParams } = new URL(request.url);
  const page:number = searchParams.get('page') !== null ? parseInt(searchParams.get('page')!.toString()) : 1;
  const posts = getAllPosts(page, parseInt(process.env.PAGINATION_POST_LIMIT!) || 20);
  return new Response(JSON.stringify(posts));
}