import { KeyValueGrade } from "models/grade";
import styled from "styled-components";
import { SocialIconBgColor } from "utils/convertDic";
interface GradeProps {
    type: "news" | "instagram" | "twitter" | "telegram";
    data: KeyValueGrade;
}

export default function Grade({ data, type }: GradeProps) {
    return (
        <div className=" flex flex-row  items-center">
            <GradientText style={{ background: SocialIconBgColor[type] }}>
                {`${Math.floor(data?.calculated * 100) || 0}%`}
            </GradientText>
            سهم الکامپ از این بستر
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
