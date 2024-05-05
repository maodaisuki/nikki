import { getPostFile, getSpecialPosts } from "@/lib/api";

export async function GET(request: any) {
    console.log("It works!");
    const { searchParams }: { searchParams : URLSearchParams}  = new URL(request.url);
    const query: string = request.query.string.toString() || "" ;
    const postFiles = getSpecialPosts(query, 1, Number.MAX_SAFE_INTEGER);
    let allCount = postFiles.length / (parseInt(process.env.PAGINATION_POST_LIMIT!) || 20);
    if(allCount % 1 !== 0) {
        allCount = parseInt(allCount.toString()) + 1;
    }
    // console.log(allCount);
    return new Response(JSON.stringify(allCount));
}