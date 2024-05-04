'use client'
import { Post } from "@/interfaces/post";
import { useEffect, useState } from "react";
import PostSlug from '@/app/_components/postSlug';

type Props = {
    page: number;
}

const Pagination = ({ page }: Props) => {
    const [posts, setPosts] = useState<any>(null);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/api/getAllPosts?page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
    }, [page]);

    if(isLoading) {
        return (
            <div className="w-full my-[10px]">
                <p>Loading...</p>
            </div>
        )
    }
    if(posts.length === 0) {
        return (
            <div className="w-full my-[10px]">
                <p>No posts.</p>
            </div>
        )
    }
    // console.log(posts);
    return (
        <>
            <div className="w-full">
                {posts.map((item:Post) => {
                    return (
                        <PostSlug post={item} key={item.link} />
                    )
                })}
            </div>
        </>
    )
}

export default Pagination;