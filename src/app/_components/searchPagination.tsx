'use client'
import { Post } from "@/interfaces/post";
import { useEffect, useState } from "react";
import PostSlug from '@/app/_components/postSlug';
import { useSearchParams } from "next/navigation";

type Props = {
    page: number;
    allCount: number;
}

const SearchPagination = ({ page, allCount }: Props) => {
    const searchParams = useSearchParams();
    const query = searchParams?.get('query') || '';
    const [posts, setPosts] = useState<any>(null);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/search?query=${query}&page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, page]);
    // console.log(query);
    if(isLoading) {
        return (
            <>
                <main className="w-full mb-[20px]">
                    <div className="w-full my-[10px]">
                        <p>Loading...</p>
                    </div>
                </main>
            </>
        )
    }
    if(posts.length === 0) {
        return (
            <>
                <main className="w-full mb-[20px]">
                    <div className="flex flex-row w-full mb-[20px] p-[10px] bg-card-background">
                        <div className="items-center text-center align-center w-[25px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                        <div className="flex flex-col ml-[10px]">
                            <span className="text-[20px]">
                                <span className="text-card-foreground">{query}</span>
                                &nbsp; 的搜索结果
                            </span>
                            <span className="opacity-50 text-[14px]">
                                共 {allCount} 篇
                            </span>
                        </div>
                    </div>
                    <div className="w-full text-center p-[50px] opacity-50">
                        <span>
                            这一页什么都没有啦~
                        </span>
                    </div>
                </main>
            </>
        )
    }
    // console.log(posts);
    return (
        <>
            <main className="w-full mb-[20px]">
                <div className="flex flex-row w-full mb-[20px] p-[10px] bg-card-background">
                    <div className="items-center text-center align-center w-[25px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                    <div className="flex flex-col ml-[10px]">
                        <span className="text-[20px]">
                            <span className="text-card-foreground">{query}</span>
                            &nbsp; 的搜索结果
                        </span>
                        <span className="opacity-50 text-[14px]">
                            共 {allCount} 篇
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    {posts.map((item:Post) => {
                        return (
                            <PostSlug post={item} key={item.link} />
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default SearchPagination;