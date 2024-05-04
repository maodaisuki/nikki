import Link from "next/link";

const Footer = () => {
    const nowYear:number = new Date().getFullYear();
    let footerContent:string = '';
    if(nowYear == 2024) {
        footerContent = '2024'
    }
    else {
        footerContent = '2024 - ' + nowYear.toString();
    }
    return (
        <footer className="py-[10px] font-light text-gray-500 text-[14px] text-start items-center opacity-70">
            <span>
                &copy; { footerContent } Powered by <Link href="https://nextjs.org/" className="hover:underline">Next.js</Link>
            </span>
        </footer>
    );
}

export default Footer;