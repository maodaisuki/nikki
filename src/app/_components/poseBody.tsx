'use client';
import { useEffect, useState } from "react";
import markdownToHtml from "@/lib/markdownToHtml";

type Props = {
    content: string;
};

const PostBody = ({ content }: Props) => {
    const [htmlContent, setHtmlContent] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        markdownToHtml(content).then((html) => setHtmlContent(html));
    }, [content]);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="w-full mt-[20px] space-y-4">
            <div className="space-y-4" dangerouslySetInnerHTML={{ __html: isCollapsed && htmlContent.length > 500 ? htmlContent.substring(0, 500) + "..." : htmlContent }}>
            </div>
            {htmlContent.length > 500 && (
                <div className="text-red">
                    <button onClick={toggleCollapse} className="underline collapseButton">
                        {isCollapsed ? "展开" : "折叠"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default PostBody;