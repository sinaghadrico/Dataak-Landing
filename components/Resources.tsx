import { Box } from "@ui-components/Box";
import useData from "services/useData";
import useSWR from "swr";
import { fromUnixTime, format } from "date-fns";

interface ResourcesProps {
    total: number;
}

export default function Resources({ total }: ResourcesProps) {
    const { getResources } = useData();
    const { data } = useSWR([`getResources`], getResources);

    return (
        <Box>
            <div className=" flex flex-row justify-center">{total}</div>
        </Box>
    );
}
