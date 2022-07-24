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
        <div className=" flex flex-row justify-center p-5 ">
            <TotalBox style={{ marginLeft: "-96px" }}>
                <Text.h1 color="white">{total}</Text.h1>
                <Text.p color="white">مطلب </Text.p>
            </TotalBox>
            <Box style={{ paddingRight: "96px" }}>
                <LineChart data={data} />
            </Box>
        </div>
    );
}
const TotalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 96px;
    min-height: 200px;
    background: #6b86f9;
    border-radius: 16px;
    z-index: 1;
`;
