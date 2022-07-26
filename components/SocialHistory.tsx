import styled from "styled-components";
import useData from "services/useData";
import useSWR from "swr";
import SocialBox from "./SocialBox";

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
            <div className=" flex flex-row flex-wrap items-baseline   justify-center mt-10 mb-28">
                <SocialBox
                    type="news"
                    dataSubject={dataSubjects?.news}
                    dataGrade={dataGrade?.news}
                    dataSentiment={dataSentiment?.news}
                />
                <SocialBox
                    type="instagram"
                    dataSubject={dataSubjects?.instagram}
                    dataGrade={dataGrade?.instagram}
                    dataSentiment={dataSentiment?.instagram}
                />
                <SocialBox
                    type="twitter"
                    dataSubject={dataSubjects?.twitter}
                    dataGrade={dataGrade?.twitter}
                    dataSentiment={dataSentiment?.twitter}
                />
                <SocialBox
                    type="telegram"
                    dataSubject={dataSubjects?.telegram}
                    dataGrade={dataGrade?.telegram}
                    dataSentiment={dataSentiment?.telegram}
                />
            </div>
        </Container>
    );
}
