'use client'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "./_components/pagination";
import PaginationBar from "./_components/paginationBar";
import Header from "./_components/header";

export default function Home() {
  const [allCount, setAllCount] = useState<any>(null);
  const searchParams = useSearchParams();
  let page = searchParams?.get('page') !== null ? parseInt(searchParams!.get('page')!.toString()) : 1;
  useEffect(() => {
    fetch(`/api/getAllCount`)
      .then((res) => res.json())
      .then((data) => {
        setAllCount(data);
      })
    if(searchParams?.get('page') !== null) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      page = parseInt(searchParams!.get('page')!.toString()) || 1;
    }
  }, [searchParams]);
  // console.log(page);
  return (
    <>
      <Header />
      <main className="w-full mb-[20px]">
        <Pagination page={page} />
        <PaginationBar page={page} allCount={allCount} />
      </main>
    </>
  );
}
