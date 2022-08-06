import { Text } from "@ui-components/Text";
import { KeyValueGrade } from "models/grade";
import styled from "styled-components";
import useSWR from "swr";
import { SocialIconBgColor } from "utils/convertDic";
interface GradeProps {
    type: "news" | "instagram" | "twitter" | "telegram";
    data: KeyValueGrade;
}

export default function Grade({ data, type }: GradeProps) {
    const { data: dataDetails } = useSWR([`getDetails`]);
    return (
        <div className=" flex flex-row  items-center">
            <GradientText style={{ background: SocialIconBgColor[type] }}>
                {`${Math.floor(data?.calculated * 100) || 0}%`}
            </GradientText>
            <Text size="sm"> سهم {dataDetails?.title || "-"} از این بستر </Text>
        </div>
    );
}
const GradientText = styled.h1`
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    padding-left: 5px;
`;
