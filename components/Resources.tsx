import styled from "styled-components";
import { Box } from "@ui-components/Box";
import useData from "services/useData";
import useSWR from "swr";
import { Icon } from "@ui-components/Icon";
import { getImageFromProxy } from "utils/getImageFromProxy";
import { SocialIconColor, SocialIconDic, TesourceTypeDic } from "utils/convertDic";
import { Text } from "@ui-components/Text";

interface ResourcesProps {
    total: number;
}

export default function Resources({ total }: ResourcesProps) {
    const { getResources } = useData();
    const { data } = useSWR([`getResources`], getResources);

    return (
        <Box>
            <div className=" flex flex-row justify-center">
                <TotalBox>
                    <Text.h1 color="white">{total}</Text.h1>
                    <Text.p color="white">منبع</Text.p>
                </TotalBox>
                <div className="flex flex-col">
                    <Text>فعال‌ترین‌ها</Text>
                    <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-3 md:gap-2 lg:gap-6 ">
                        {data?.map((resource) => (
                            <ResourceAvatar>
                                <Icon
                                    src={SocialIconDic[TesourceTypeDic[resource?.resource_type]]}
                                    className="social-icon"
                                    style={{ color: SocialIconColor[TesourceTypeDic[resource?.resource_type]] }}
                                />
                                <Icon
                                    src={getImageFromProxy(
                                        "https://api.dataak.com/media/images/news/agency/35" ||
                                            resource?.profile_pic_url,
                                        "image",
                                    )}
                                    width="55"
                                    height="55"
                                    className="avatar"
                                />
                            </ResourceAvatar>
                        ))}
                    </div>
                </div>
            </div>
        </Box>
    );
}
const ResourceAvatar = styled.div`
    position: relative;
    .social-icon {
        position: absolute;
        z-index: 1;
        left: -5px;
        top: -5px;
        font-size: 20px;
    }
    .avatar {
        border: 1px solid #f7f7f7;
        border-radius: 50%;
    }
`;
const TotalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 200px;
    background: #6b86f9;
    border-radius: 16px;
`;
