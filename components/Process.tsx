import { Box } from "@ui-components/Box";
import useData from "services/useData";
import useSWR from "swr";
import LineChart from "./LineChart";

interface ProcessProps {
    total: number;
}

export default function Process({ total }: ProcessProps) {
    const { getProcess } = useData();
    const { data } = useSWR([`getProcess`], getProcess);

    return (
        <Box>
            <div className=" flex flex-row justify-center">
                {total}
                <LineChart data={data} />
            </div>
        </Box>
    );
}
