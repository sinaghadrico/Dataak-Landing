import styled from "styled-components";
import useData from "services/useData";
import useSWR from "swr";
import { fromUnixTime, format } from "date-fns";

export default function SocialHistory() {
    const { getGrade, getSentiment, getSubjects } = useData();
    const { data: dataGrade } = useSWR([`getGrade`], getGrade);
    const { data: dataSentiment } = useSWR([`getSentiment`], getSentiment);
    const { data: dataSubjects } = useSWR([`getSubjects`], getSubjects);

    const Container = styled.div`
        background-repeat: no-repeat;
        min-height: 250px;
        min-height: 500px;
        background-position: right;
    `;

    return (
        <Container className="container-footer">
            <div className=" flex flex-row justify-center"></div>
        </Container>
    );
}
