import Link from "next/link";
type Props = {
    allCount: number;
    page: number;
    query: string;
}

const SearchPaginationBar = ({ allCount, page, query }: Props) => {
    if(allCount == 0 || allCount == undefined) {
        return (
            <div className="w-full">
                <hr className="ui-hr" />
                <div className="flex justify-evenly text-center text-card-foreground leading-[80px] mt-[0] -mx-[20px] -mb-[40px] bg-card-background">
                    <Link href="/">
                        回到主页
                    </Link>
                </div>
            </div>
        );
    }
    if(allCount == page) {
        if(page == 1) {
            return (
                <div className="w-full">
                    <hr className="ui-hr" />
                    <div className="flex justify-evenly text-center text-card-foreground leading-[80px] mt-[0] -mx-[20px] -mb-[40px] bg-card-background">
                        什么都没有了~
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="w-full">
                    <hr className="ui-hr" />
                    <div className="flex justify-evenly text-center text-card-foreground leading-[80px] mt-[0] -mx-[20px] -mb-[40px] bg-card-background">
                        <Link href={`/search?query=${query}&page=${ page - 1 }`} >
                            上一页
                        </Link>
                    </div>
                </div>
            )
        }
    }
    else {
        if(page == 1) {
            return (
                <div className="w-full">
                    <hr className="ui-hr" />
                    <div className="flex justify-evenly text-center text-card-foreground leading-[80px] mt-[0] -mx-[20px] -mb-[40px] bg-card-background">
                        <Link href={`/search?query=${query}&page=${ page + 1 }`} >
                            下一页
                        </Link>
                    </div>
                </div>
            )
        }
        else {
            if(page > allCount) {
                return (
                    <div className="w-full">
                        <hr className="ui-hr" />
                        <div className="flex justify-evenly text-center text-card-foreground leading-[80px] mt-[0] -mx-[20px] -mb-[40px] bg-card-background">
                            <Link href={`/search?query=${query}&page=${ allCount }`} >
                                上一页
                            </Link>
                        </div>
                    </div>
                )
            }
            else if(page < 1) {
                return (
                    <div className="w-full">
                        <hr className="ui-hr" />
                        <div className="flex justify-evenly text-center text-card-foreground leading-[80px] mt-[0] -mx-[20px] -mb-[40px] bg-card-background">
                            <Link href={`/search?query=${query}&page=1`} >
                                下一页
                            </Link>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="w-full">
                        <hr className="ui-hr" />
                        <div className="flex justify-evenly text-center text-card-foreground leading-[80px] mt-[0] -mx-[20px] -mb-[40px] bg-card-background">
                            <Link href={`/search?query=${query}&page=${ page - 1 }`} >
                                上一页
                            </Link>
                            <Link href={`/search?query=${query}&page=${ page + 1 }`} >
                                下一页
                            </Link>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default SearchPaginationBar;
