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
        <SocialBoxContainer className={`flex flex-col justify-center p-5 type-${type}`}>
            <div
                className="flex  items-center box-header"
                style={{ background: SocialIconBgColor[type], marginBottom: "-68px", zIndex: 1 }}
            >
                <Icon src={SocialIconDic[type]} style={{ color: "white", fontSize: "32px" }} />
                <Text.h1 size="2xl" color="white" className="px-2">
                    {SocialDic[type]}
                </Text.h1>
            </div>
            <Box className="box-body " style={{ paddingTop: "68px" }}>
                <WordCloud data={dataSubject} />
                {type != "news" && <Sentiment data={dataSentiment} />}
                {type != "news" && <Grade data={dataGrade} type={type} />}
            </Box>
        </SocialBoxContainer>
    );
}
const SocialBoxContainer = styled.div`
    min-height: 600px;
    min-width: 246px;
    .box-header {
        display: flex;
        padding: 16px;
        height: 68px;
        border-radius: 16px;
    }
    .box-body {
        min-width: 246px;
        min-height: 500px;
    }
`;
