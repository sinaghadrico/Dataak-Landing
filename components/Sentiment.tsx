import { Range } from "@ui-components/Range";
import { Text } from "@ui-components/Text";
import { KeyValueSentiment } from "models/sentiment";

interface SentimentProps {
    data: KeyValueSentiment;
}

export default function Sentiment({ data }: SentimentProps) {
    return (
        <div className=" flex flex-col justify-center">
            <Text> تحلیل احساسات</Text>

            <Range value={Number(Math.floor(data?.sentiment * 100))} />
        </div>
    );
}
