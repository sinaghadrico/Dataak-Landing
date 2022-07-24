import styled from "styled-components";
import { Text } from "@ui-components/Text";
import { fromUnixTime, format } from "date-fns";
import { PostCard } from "models/post";
import { Icon } from "@ui-components/Icon";
import { SocialIconDic } from "utils/convertDic";
import { getImageFromProxy } from "utils/getImageFromProxy";
interface PostCardProps {
    data: PostCard;
}

export default function TwitterCard({ data }: PostCardProps) {
    const WrapperTwitterCardContainer = styled.div`
        max-width: 336px;
        width: 100%;
    `;
    const CardBox = styled.div`
        width: 100%;
        min-height: 296px;
        background: #ffffff;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        border-radius: 16px;
    `;
    return (
        <WrapperTwitterCardContainer className=" flex flex-col justify-center p-5">
            <CardBox className=" flex flex-col  p-5">
                <div className="card-header   flex flex-row items-start">
                    <div className="card-header-type  flex flex-row justify-center items-center">
                        <Icon src={SocialIconDic["twitter"]} style={{ fontSize: "20px" }} className="pl-1" />
                        {data?.type || "توییت"}
                    </div>
                    <div className="card-header-user flex flex-row">
                        <div className="card-header-user-details flex flex-col">
                            <div className="card-header-user-details-username text-left">
                                {data?.username || "the_hossein_"}@
                            </div>
                            <div className="card-header-user-details-time">{data?.time}</div>
                        </div>
                        <div className="card-header-user-avatar">
                            <CardAvatar>
                                <Icon
                                    src={getImageFromProxy(
                                        "https://api.dataak.com/media/images/news/agency/35",
                                        "image",
                                    )}
                                    width="55"
                                    height="55"
                                    className="avatar"
                                />
                            </CardAvatar>
                        </div>
                    </div>
                </div>
                <div className="card-description break-words">
                    {data?.description || "بسته پرتخفیف همراه اول به مناسبت اعیاد قربان ‌و غدیر بفرست برای دوستانت"}
                </div>
                <div className="card-options flex flex-row">
                    <div className="card-options-item flex flex-row pl-9">
                        <Icon src="ri-heart-3-line" style={{ color: "#9CAEBB" }} />
                        <div className="card-options-item-value pr-1">{data?.like_count}</div>
                    </div>
                    <div className="card-options-item flex flex-row pl-9">
                        <Icon src="ri-discuss-line" style={{ color: "#9CAEBB" }} />
                        <div className="card-options-item-value pr-1">{data?.comment_count}</div>
                    </div>
                </div>
            </CardBox>
        </WrapperTwitterCardContainer>
    );
}
const CardAvatar = styled.div`
    position: relative;
    .avatar {
        border: 1px solid #f7f7f7;
        border-radius: 50%;
    }
`;
