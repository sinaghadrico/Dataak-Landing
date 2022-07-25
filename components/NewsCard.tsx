import styled from "styled-components";
import { Text } from "@ui-components/Text";
import { PostCard } from "models/post";
import { Icon } from "@ui-components/Icon";
import { PostNewsDic, SocialIconDic } from "utils/convertDic";
import { getImageFromProxy } from "utils/getImageFromProxy";
import { getformatDistanceToNowStrict } from "utils/getDateTime";
interface PostCardProps {
    data: PostCard;
}

export default function NewsCard({ data }: PostCardProps) {
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
            max-height: 150px;
        }
    `;

    return (
        <WrapperCardContainer className=" flex flex-col justify-center p-5">
            <CardBox className=" flex flex-col  p-5">
                <div className="card-header   flex flex-row items-start justify-between">
                    <div className="card-header-user flex flex-row">
                        <div className="card-header-user-avatar ">
                            <CardAvatar>
                                <Icon
                                    // src={getImageFromProxy(
                                    //     data?.[PostNewsDic["avatar"]],
                                    //     "image",
                                    // )}
                                    src={data?.[PostNewsDic["avatar"]]}
                                    width="64"
                                    height="40"
                                    className="avatar"
                                />
                            </CardAvatar>
                        </div>
                        <div className="card-header-user-details flex flex-col px-2 ">
                            <div className="card-header-user-details-username ">{data?.[PostNewsDic["username"]]}</div>
                            <div className="card-header-user-details-time">
                                {getformatDistanceToNowStrict(data?.[PostNewsDic["time"]])}
                            </div>
                        </div>
                    </div>
                    <div className="card-header-type  flex flex-row justify-center items-center">
                        <Icon src={SocialIconDic["news"]} style={{ fontSize: "20px" }} className="pl-1" />
                        {"خبر"}
                    </div>
                </div>
                <div className="card-description break-words py-5">{data?.[PostNewsDic["description"]]}</div>
                {/* <div className="card-options flex flex-row pt-4">
                    <div className="card-options-item flex flex-row pl-9">
                        <Icon src="ri-heart-3-line" style={{ color: "#9CAEBB" }} />
                        <div className="card-options-item-value pr-1" style={{ color: "#777777" }}>
                            {data?.[PostNewsDic["like_count"]]}
                        </div>
                    </div>
                    <div className="card-options-item flex flex-row pl-9">
                        <Icon src="ri-discuss-line" style={{ color: "#9CAEBB" }} />
                        <div className="card-options-item-value pr-1" style={{ color: "#777777" }}>
                            {data?.[PostNewsDic["comment_count"]]}
                        </div>
                    </div>
                </div> */}
            </CardBox>
        </WrapperCardContainer>
    );
}
const CardAvatar = styled.div`
    position: relative;
    .avatar {
        border: 1px solid #f7f7f7;
        border-radius: 20px;
    }
`;
