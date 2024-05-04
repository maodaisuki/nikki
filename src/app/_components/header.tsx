'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';



const Header = () => {
    const router = useRouter();
    const  submitSearch = (event: any) => {
        event.preventDefault();
        const query = event.target.querySelector('input[name="query"]').value;
        router.push(`${process.env.NEXT_PUBLIC_BASE_PATH}/search?query=${query}`);
    }
    return (
        <header className="w-full h-[auto] mb-[30px]">
            <div className="mb-[20px]">
                <Link href="/" className="block h-[50px] header-title"></Link>
            </div>
            <hr className="ui-hr" />
            <div className="mx-auto my-[1em] px-[5px] py-[0] bg-card-background rounded-[4px] border-l-[var(--card-foreground)] border-l-[4px]">
                <Link href="/about" className="flex justify-between leading-[36px] px-[.4em] py-[0] text-card-foreground">
                    <span>  
                        关于猫猫日记
                    </span>
                    <time className="text-[12px]">
                        2024-05-01
                    </time>
                </Link>
            </div>
            {/* 搜索框 */}
            <div className="w-full flex flex-row">
                <form className="w-full flex relative items-center" onSubmit={submitSearch}>
                    <input className="w-full border-[0] rounded-[2px] pl-[4px] pr-[28px] py-[2px] [box-shadow:0_0_0_1px_rgba(0,_0,_0,_0.2)]" type="text" id="search" name="query" placeholder="日期、作者、内容"/>
                    <button className="absolute inline-block right-1 opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Header;