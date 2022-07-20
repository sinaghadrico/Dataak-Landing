import { Box } from "@ui-components/Box";
import useData from "services/useData";
import useSWR from "swr";
import { Icon } from "@ui-components/Icon";
import { fromUnixTime, format } from "date-fns";

export default function Posts() {
    const { getPosts } = useData();
    const { data } = useSWR([`getPosts`], getPosts);

    return (
        <Box>
            <div className=" flex flex-row justify-center">
                <Icon src="ri-add-line" />
            </div>
        </Box>
    );
}
