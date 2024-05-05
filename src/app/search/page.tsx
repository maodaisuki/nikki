'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../_components/header";
import SearchPagination from "../_components/searchPagination";
import SearchPaginationBar from "../_components/searchPaginationBar";

const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams?.get('query') || '';
    let page = searchParams?.get('page') !== null ? parseInt(searchParams!.get('page')!.toString()) : 1;
    const [allCount, setAllCount] = useState<any>(null);
    useEffect(() => {
        fetch(`/api/search/getSpecialCount?query=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setAllCount(data);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, page]);
    // console.log(query);
    // console.log(posts);
    return (
        <>
            <Header />
            <main className="w-full mb-[20px]">
                <SearchPagination page={page} allCount={allCount} />
                <SearchPaginationBar page={page} allCount={allCount} query={query}/>
            </main>
        </>
    )
}

export default SearchPage;