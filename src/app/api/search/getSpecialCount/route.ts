import { getPostFile, getSpecialPosts } from "@/lib/api";
import { INSPECT_MAX_BYTES } from "buffer";
export const dynamic = 'force-dynamic';
export async function GET(request: any) {
    console.log("It works!");
    const { searchParams } = new URL(request.url);
    const query: string = searchParams.get("query") !== null ? searchParams.get("query")!.toString() : "";
    const postFiles = getSpecialPosts(query, 1, Number.MAX_SAFE_INTEGER);
    let allCount = postFiles.length / (parseInt(process.env.PAGINATION_POST_LIMIT!) || 20);
    if(allCount % 1 !== 0) {
        allCount = parseInt(allCount.toString()) + 1;
    }
    // console.log(allCount);
    return new Response(JSON.stringify(allCount));
}