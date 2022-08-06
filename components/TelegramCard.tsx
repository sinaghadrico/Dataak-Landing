import styled from "styled-components";
import { Text } from "@ui-components/Text";
import { PostCard } from "models/post";
import { Icon } from "@ui-components/Icon";
import { PostTelegramDic, SocialIconDic } from "utils/convertDic";
import { getImageFromProxy } from "utils/getImageFromProxy";
import { getFormatDistanceToNowStrict } from "utils/getDateTime";
interface PostCardProps {
    data: PostCard;
}

export default function TelegramCard({ data }: PostCardProps) {
    const WrapperCardContainer = styled.div`
        max-width: 336px;
        width: 100%;
    `;
    const CardBox = styled.div`
        width: 100%;
        min-height: 192px;
        background: #ffffff;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        border-radius: 16px;

        .card-description {
            text-overflow: ellipsis;
            overflow: hidden;
            max-height: 60px;
        }
    `;
    return (
        <WrapperCardContainer className=" flex flex-col justify-center p-5">
            <CardBox className=" flex flex-col  p-5">
                <div className="card-header   flex flex-row items-start justify-between">
                    <div className="card-header-type  flex flex-row justify-center items-center">
                        <Icon src={SocialIconDic["telegram"]} style={{ fontSize: "20px" }} className="pl-1" />
                        <Text size="xs"> {"تلگرام"} </Text>
                    </div>
                    <div className="card-header-user flex flex-row">
                        <div className="card-header-user-details flex flex-col items-end">
                            <div className="card-header-user-details-username text-left">
                                <Text size="sm"> {data?.[PostTelegramDic["username"]]}@ </Text>
                            </div>
                            <div className="card-header-user-details-time">
                                <Text size="xs" color="subTitle">
                                    {" "}
                                    {getFormatDistanceToNowStrict(data?.[PostTelegramDic["time"]])}{" "}
                                </Text>
                            </div>
                        </div>
                        <div className="card-header-user-avatar pr-2">
                            <CardAvatar>
                                <Icon
                                    src={getImageFromProxy(data?.[PostTelegramDic["avatar"]], "avatar")}
                                    width="40"
                                    height="40"
                                    className="avatar"
                                />
                            </CardAvatar>
                        </div>
                    </div>
                </div>
                <Text size="tiny" className="card-description break-words py-5">
                    {data?.[PostTelegramDic["description"]]}
                </Text>
                <div className="card-options flex flex-row pt-4">
                    <div className="card-options-item flex flex-row pl-9 items-center">
                        <Icon src="ri-eye-line" style={{ color: "#9CAEBB" }} />
                        <Text size="xs" className="card-options-item-value pr-1" style={{ color: "#777777" }}>
                            {data?.[PostTelegramDic["view_count"]]}
                        </Text>
                    </div>
                    <div className="card-options-item flex flex-row pl-9  items-center">
                        <Icon src="ri-discuss-line" style={{ color: "#9CAEBB" }} />
                        <Text size="xs" className="card-options-item-value pr-1" style={{ color: "#777777" }}>
                            {data?.[PostTelegramDic["comment_count"]]}
                        </Text>
                    </div>
                </div>
            </CardBox>
        </WrapperCardContainer>
    );
}
const CardAvatar = styled.div`
    position: relative;
    .avatar {
        border: 1px solid #f7f7f7;
        border-radius: 50%;
    }
`;
