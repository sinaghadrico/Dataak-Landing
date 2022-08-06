import useData from "services/useData";
import useSWR from "swr";
import Process from "./Process";
import Resources from "./Resources";
import { Text } from "@ui-components/Text";

export default function Info() {
    const { getInfo } = useData();
    const { data: dataDetails } = useSWR([`getDetails`]);
    const { data } = useSWR([`getInfo`], getInfo);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center mt-16">
                <Text size="2xl"> {dataDetails?.description}</Text>
            </div>

            <div className="flex flex-row flex-wrap  justify-center mt-10">
                <Process total={Number(+data?.post_count)} />
                <Resources total={Number(+data?.resource_count)} />
            </div>
        </div>
    );
}
