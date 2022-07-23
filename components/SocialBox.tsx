import { Box } from "@ui-components/Box";
import { Icon } from "@ui-components/Icon";
import { Text } from "@ui-components/Text";
import { KeyValueGrade } from "models/grade";
import styled from "styled-components";
import { KeyValueSentiment } from "models/sentiment";
import { KeyValueSubjects } from "models/subjects";
import { SocialDic, SocialIconBgColor, SocialIconDic } from "utils/convertDic";
import Grade from "./Grade";
import Sentiment from "./Sentiment";
import WordCloud from "./WordCloud";

interface SocialBoxProps {
    type: "news" | "instagram" | "twitter" | "telegram";
    dataSubject: KeyValueSubjects[];
    dataGrade: KeyValueGrade;
    dataSentiment: KeyValueSentiment;
}

export default function SocialBox({ type, dataSubject, dataSentiment, dataGrade }: SocialBoxProps) {
    return (
        <Box>
            <SocialBoxContainer className={`flex flex-col justify-center type-${type}`}>
                <div className="flex box-header" style={{ background: SocialIconBgColor[type] }}>
                    <Icon src={SocialIconDic[type]} />
                    <Text>{SocialDic[type]}</Text>
                </div>
                <WordCloud data={dataSubject} />
                <Sentiment data={dataSentiment} />
                <Grade data={dataGrade} type={type} />
            </SocialBoxContainer>
        </Box>
    );
}
const SocialBoxContainer = styled.div`
    .box-header {
        display: flex;
        padding: 16px;
        /* width: 246px; */
        height: 68px;
        border-radius: 16px;
    }
`;
