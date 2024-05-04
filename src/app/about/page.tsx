import Link from "next/link";
import Footer from "../_components/footer";

const About = () => {
    return (
        <>
            <header className="w-full h-[auto] mb-[30px]">
                <div className="mb-[20px]">
                    <Link href="/" className="block h-[50px] header-title"></Link>
                </div>
                <hr className="ui-hr" />
            </header>
            <main className="w-full mb-[20px]">
                <h1>
                    猫终会穿过彩虹桥。目的地是乌托邦。每只猫都会成为模因（猫因）。
                </h1>
            </main>
            <Footer />
        </>
    )
}

export default About;