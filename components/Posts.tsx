import useData from "services/useData";
import useSWR from "swr";
import { Icon } from "@ui-components/Icon";

import TwitterCard from "./TwitterCard";
import { PostTypeDic } from "utils/convertDic";
import InstagramCard from "./InstagramCard";
import NewsCard from "./NewsCard";
import TelegramCard from "./TelegramCard";

export default function Posts() {
    const { getPosts } = useData();
    const { data } = useSWR([`getPosts`], getPosts);

    return (
        <div className=" flex flex-col flex-wrap justify-center items-center">
            <div className=" flex flex-row flex-wrap justify-center" style={{ maxWidth: "1056px" }}>
                {data?.map((post) => (
                    <>
                        {PostTypeDic[post?.post_type] === "news" && <NewsCard data={post} />}
                        {PostTypeDic[post?.post_type] === "instagram" && <InstagramCard data={post} />}
                        {PostTypeDic[post?.post_type] === "twitter" && <TwitterCard data={post} />}
                        {PostTypeDic[post?.post_type] === "telegram" && <TelegramCard data={post} />}
                    </>
                ))}
            </div>
            <Icon src="ri-add-line" />
        </div>
    );
}
