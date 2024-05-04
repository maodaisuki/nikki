import Link from "next/link";
type Props = {
    allCount: number;
    page: number;
}

const PaginationBar = ({ allCount, page }: Props) => {
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
                        <Link href={`/?page=${ page - 1 }`} >
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
                        <Link href={`/?page=${ page + 1 }`} >
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
                            <Link href={`/?page=${ allCount }`} >
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
                            <Link href={`/?page=1`} >
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
                            <Link href={`/?page=${ page - 1 }`} >
                                上一页
                            </Link>
                            <Link href={`/?page=${ page + 1 }`} >
                                下一页
                            </Link>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default PaginationBar;
