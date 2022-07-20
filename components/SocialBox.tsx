import { Box } from "@ui-components/Box";
import { Icon } from "@ui-components/Icon";
import { Text } from "@ui-components/Text";
import { KeyValueGrade } from "models/grade";
import { KeyValueSentiment } from "models/sentiment";
import { KeyValueSubjects } from "models/subjects";
import { SocialDic, SocialIconDic } from "utils/convertDic";
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
            <div className={`flex flex-col justify-center type-${type}`}>
                <div className="flex">
                    <Icon src={SocialIconDic[type]} />
                    <Text>{SocialDic[type]}</Text>
                </div>
                <WordCloud data={dataSubject} />
                <Sentiment data={dataSentiment} />
                <Grade data={dataGrade} />
            </div>
        </Box>
    );
}
