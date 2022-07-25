import styled from "styled-components";
import { Text } from "@ui-components/Text";
import { PostCard } from "models/post";
import { Icon } from "@ui-components/Icon";
import { PostInstagramDic, SocialIconDic } from "utils/convertDic";
import { getImageFromProxy } from "utils/getImageFromProxy";
import { getFormatDistanceToNowStrict } from "utils/getDateTime";
import logoAvatar from "assets/img/avatar.jpg";
interface PostCardProps {
    data: PostCard;
}

export default function InstagramCard({ data }: PostCardProps) {
    const WrapperCardContainer = styled.div`
        max-width: 336px;
        width: 100%;
        border-radius: 16px;
    `;
    const CardBox = styled.div`
        width: 100%;
        min-height: 192px;
        background: #ffffff;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        border-radius: 16px;
        overflow: hidden;

        .card-description {
            text-overflow: ellipsis;
            overflow: hidden;
            max-height: 150px;
        }
        .card-header {
            width: 100%;
            min-height: 168px;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .card-header-type {
            background: #9caebbc2;
            border-radius: 5px;
            padding: 3px 5px;
        }
        .card-header-user-details-username {
            background: #9caebbc2;
            border-radius: 5px;
            padding: 3px 5px;
        }
        .card-header-user-details-time {
            background: #9caebbc2;
            border-radius: 5px;
            padding: 3px 5px;
            margin-top: 2px;
        }
    `;
    const imageGallery = data?.["images"] ? JSON?.parse(data?.["images"]) || [] : [];

    const srcImage =
        imageGallery?.candidates?.length > 0
            ? imageGallery?.candidates?.filter((x) => x.width === 640)?.[0]?.url
            : logoAvatar;
    return (
        <WrapperCardContainer className=" flex flex-col justify-center p-5">
            <CardBox className=" flex flex-col  ">
                <div
                    className="card-header   flex flex-row items-start justify-between"
                    style={{
                        backgroundImage: `url(${getImageFromProxy(srcImage, "image")})`,
                    }}
                >
                    <div className="card-header-type  flex flex-row justify-center items-center m-5">
                        <Icon
                            src={SocialIconDic["instagram"]}
                            style={{ fontSize: "20px", color: "white" }}
                            className="pl-1"
                        />

                        <Text color="white" size="sm">
                            {" "}
                            {"اینستاگرام"}
                        </Text>
                    </div>
                    <div className="card-header-user flex flex-row p-5">
                        <div className="card-header-user-details flex flex-col items-end">
                            <div className="card-header-user-details-username text-left">
                                <Text size="sm" color="white">
                                    {" "}
                                    {data?.[PostInstagramDic["user"]].username}@
                                </Text>
                            </div>
                            <div className="card-header-user-details-time ">
                                <Text size="xs" color="white">
                                    {getFormatDistanceToNowStrict(data?.[PostInstagramDic["time"]])}
                                </Text>
                            </div>
                        </div>
                        <div className="card-header-user-avatar pr-2">
                            <CardAvatar>
                                <Icon
                                    src={getImageFromProxy(data?.[PostInstagramDic["user"]]?.avatar, "avatar")}
                                    width="40"
                                    height="40"
                                    className="avatar"
                                />
                            </CardAvatar>
                        </div>
                    </div>
                </div>
                <div className="card-options flex flex-row p-5">
                    <div className="card-options-item flex flex-row pl-9">
                        <Icon src="ri-heart-3-line" style={{ color: "#9CAEBB" }} />
                        <div className="card-options-item-value pr-1" style={{ color: "#777777" }}>
                            {data?.[PostInstagramDic["like_count"]]}
                        </div>
                    </div>
                    <div className="card-options-item flex flex-row pl-9">
                        <Icon src="ri-discuss-line" style={{ color: "#9CAEBB" }} />
                        <div className="card-options-item-value pr-1" style={{ color: "#777777" }}>
                            {data?.[PostInstagramDic["comment_count"]]}
                        </div>
                    </div>
                </div>
                <div className="card-description break-words px-5 mb-3">{data?.[PostInstagramDic["description"]]}</div>
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
