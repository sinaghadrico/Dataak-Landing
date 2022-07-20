import { Box } from "@ui-components/Box";
import useData from "services/useData";
import useSWR from "swr";
import { fromUnixTime, format } from "date-fns";
import Process from "./Process";
import Resources from "./Resources";
import { Text } from "@ui-components/Text";

export default function Info() {
    const { getDetails, getInfo } = useData();
    const { data: dataDetails } = useSWR([`getDetails`], getDetails);
    const { data } = useSWR([`getInfo`], getInfo);

    return (
        <Box>
            <div className=" flex flex-row justify-center">
                <Text> {dataDetails?.title}</Text>
            </div>

            <div className=" flex flex-row justify-center">
                <Process total={+data?.post_count} />
                <Resources total={+data?.resource_count} />
            </div>
        </Box>
    );
}
