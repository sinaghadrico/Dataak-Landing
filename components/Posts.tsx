import useData from "services/useData";
import useSWR from "swr";
import { Icon } from "@ui-components/Icon";

import TwitterCard from "./TwitterCard";

export default function Posts() {
    const { getPosts } = useData();
    const { data } = useSWR([`getPosts`], getPosts);

    return (
        <div className=" flex flex-col flex-wrap justify-center items-center">
            <div className=" flex flex-row flex-wrap justify-center" style={{ maxWidth: "1056px" }}>
                {data?.map((post, index) => (
                    <TwitterCard data={post} />
                ))}
            </div>
            <Icon src="ri-add-line" />
        </div>
    );
}
