import useData from "services/useData";
import useSWR from "swr";
import Process from "./Process";
import Resources from "./Resources";
import { Text } from "@ui-components/Text";

export default function Info() {
    const { getDetails, getInfo } = useData();
    const { data: dataDetails } = useSWR([`getDetails`], getDetails);
    const { data } = useSWR([`getInfo`], getInfo);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center mt-16">
                <Text size="2xl"> {dataDetails?.title}</Text>
            </div>

            <div className="flex flex-row flex-wrap  justify-center mt-10">
                <Process total={+data?.post_count} />
                <Resources total={+data?.resource_count} />
            </div>
        </div>
    );
}
