import styled from "styled-components";
import { Box } from "@ui-components/Box";
import useData from "services/useData";
import useSWR from "swr";
import LineChart from "./LineChart";
import { Text } from "@ui-components/Text";

interface ProcessProps {
    total: number;
}

export default function Process({ total }: ProcessProps) {
    const { getProcess } = useData();
    const { data } = useSWR([`getProcess`], getProcess);

    return (
        <Box>
            <div className=" flex flex-row justify-center">
                <TotalBox>
                    <Text.h1 color="white">{total}</Text.h1>
                    <Text.p color="white">مطلب </Text.p>
                </TotalBox>
                <LineChart data={data} />
            </div>
        </Box>
    );
}
const TotalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 200px;
    background: #6b86f9;
    border-radius: 16px;
`;
