import PostBody from "./poseBody";
import PostFooter from "./postFooter";
import PostHeader from "./postHeader";
import { Post } from "@/interfaces/post";

type Props = {
    post: Post;
}

const PostSlug = ({post}: Props) => {
    return (
        <div className="w-full p-[5px] mb-[50px]">
            <PostHeader 
                title={post.title}
                date={post.date}
                author={post.author}
                link={post.link}
            />
            <PostBody content={post.content} />
            <PostFooter />
        </div>
    );
}

export default PostSlug;
