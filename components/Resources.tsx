import styled from "styled-components";
import { Box } from "@ui-components/Box";
import useData from "services/useData";
import useSWR from "swr";
import { Icon } from "@ui-components/Icon";
import { getImageFromProxy } from "utils/getImageFromProxy";
import { SocialIconColor, SocialIconDic, ResourceTypeDic, ResourceAvatarDic } from "utils/convertDic";
import { Text } from "@ui-components/Text";

interface ResourcesProps {
    total: number;
}

export default function Resources({ total }: ResourcesProps) {
    const { getResources } = useData();
    const { data } = useSWR([`getResources`], getResources);

    return (
        <div className=" flex flex-row justify-center p-5 ">
            <TotalBox style={{ marginLeft: "-96px" }}>
                <Text.h1 color="white">{total}</Text.h1>
                <Text.p color="white">منبع</Text.p>
            </TotalBox>
            <Box style={{ paddingRight: "96px" }}>
                <div className="flex flex-col px-5">
                    <Text>فعال‌ترین‌ها</Text>
                    <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-3 md:gap-2 lg:gap-11 pt-5 ">
                        {data?.map((resource) => (
                            <ResourceAvatar>
                                <Icon
                                    src={SocialIconDic[ResourceTypeDic[resource?.resource_type]]}
                                    className="social-icon"
                                    style={{ color: SocialIconColor[ResourceTypeDic[resource?.resource_type]] }}
                                />
                                <Icon
                                    src={getImageFromProxy(
                                        resource?.[ResourceAvatarDic[ResourceTypeDic[resource?.resource_type]]],
                                        "avatar",
                                    )}
                                    width="55"
                                    height="55"
                                    className="avatar"
                                />
                            </ResourceAvatar>
                        ))}
                    </div>
                </div>
            </Box>
        </div>
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
    min-height: 200px;
    background: #6b86f9;
    border-radius: 16px;
    z-index: 1;
`;
