import useData from "services/useData";
import useSWR from "swr";
import { Icon } from "@ui-components/Icon";

import TwitterCard from "./TwitterCard";
import { PostTypeDic } from "utils/convertDic";
import InstagramCard from "./InstagramCard";
import NewsCard from "./NewsCard";
import TelegramCard from "./TelegramCard";
import { useState } from "react";
import { Text } from "@ui-components/Text";

export default function Posts() {
    const { getPosts } = useData();
    const { data } = useSWR([`getPosts`], getPosts);

    const [pageCount, SetPageCount] = useState(8);

    const perPage = 8;
    const total = data?.length;

    return (
        <div className=" flex flex-col flex-wrap justify-center items-center">
            <div className=" flex flex-row flex-wrap justify-center items-start" style={{ maxWidth: "1056px" }}>
                {(data || [])?.slice(0, pageCount)?.map((post) => (
                    <>
                        {PostTypeDic[post?.post_type] === "news" && <NewsCard data={post} />}
                        {PostTypeDic[post?.post_type] === "instagram" && <InstagramCard data={post} />}
                        {PostTypeDic[post?.post_type] === "twitter" && <TwitterCard data={post} />}
                        {PostTypeDic[post?.post_type] === "telegram" && <TelegramCard data={post} />}
                    </>
                ))}
            </div>
            {total !== pageCount && (
                <div className="flex justify-center items-center cursor-pointer">
                    <Icon
                        src="ri-add-line"
                        onClick={() => {
                            total - pageCount > perPage ? SetPageCount(pageCount + perPage) : SetPageCount(total);
                        }}
                        style={{ color: "#6B86F9", fontSize: 20 }}
                    />

                    <Text color="purple"> مشاهده بیشتر</Text>
                </div>
            )}
        </div>
    );
}
