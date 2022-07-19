import { Box } from "@ui-components/Box";
import useData from "services/useData";
import useSWR from "swr";
import { fromUnixTime, format } from "date-fns";

export default function Posts() {
    const { getPosts } = useData();
    const { data } = useSWR([`getPosts`], getPosts);

    return (
        <Box>
            <div className=" flex flex-row justify-center"></div>
        </Box>
    );
}
