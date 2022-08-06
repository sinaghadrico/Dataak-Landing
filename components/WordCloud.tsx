import { TagCloud } from "react-tagcloud";
import styled from "styled-components";
import { KeyValueSubjects } from "models/subjects";
import { Text } from "@ui-components/Text";
interface WordCloudProps {
    data: KeyValueSubjects[];
}

export default function WordCloud({ data }: WordCloudProps) {
    const WrapperContainer = styled.div`
        max-width: 246px;
        .Tag-cloud-wrapper {
            min-height: 200px;
        }
    `;

    const tags =
        data?.map((item: KeyValueSubjects) => {
            return { value: `#${item.word}`, count: item.count };
        }) || [];

    const options = {
        luminosity: "dark",
        hue: "monochrome",
    };

    return (
        <WrapperContainer className=" flex flex-col justify-center">
            <Text size="xs" className="py-4">
                {" "}
                ابر کلمات
            </Text>
            <div className="Tag-cloud-wrapper flex flex-col justify-center">
                <TagCloud minSize={14} maxSize={32} tags={tags} colorOptions={options} />
            </div>
        </WrapperContainer>
    );
}
