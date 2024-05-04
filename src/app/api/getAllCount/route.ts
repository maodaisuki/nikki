import { getPostFile } from "@/lib/api";

export async function GET(request: any) {
    console.log("It works!");
    const postFiles = getPostFile();
    let allCount = postFiles.length / (parseInt(process.env.PAGINATION_POST_LIMIT!) || 20);
    if(allCount % 1 !== 0) {
        allCount = parseInt(allCount.toString()) + 1;
    }
    // console.log(allCount);
    return new Response(JSON.stringify(allCount));
}