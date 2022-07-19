import { Box } from "@ui-components/Box";
import useData from "services/useData";
import useSWR from "swr";
import { fromUnixTime, format } from "date-fns";

export default function Info() {
    const { getInfo } = useData();
    const { data } = useSWR([`getInfo`], getInfo);

    return (
        <Box>
            <div className=" flex flex-row justify-center"></div>
        </Box>
    );
}
