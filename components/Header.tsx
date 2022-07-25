import logoDataak from "assets/pngs/logo.png";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Icon } from "@ui-components/Icon";
import { Button } from "@ui-components/Button";

export default function Header() {
    const { push } = useRouter();

    const { data } = useSWR([`getDetails`]);

    const Link = ({ children, href, className = "" }) => {
        return (
            <a
                href={href}
                onClick={(e) => {
                    e.preventDefault();
                    // typically you want to use `next/link` for this usecase
                    // but this example shows how you can also access the router
                    // and use it manually
                    push(href);
                }}
                className={className}
            >
                {children}
            </a>
        );
    };

    return (
        <CustomHeader className="flex flex-row items-center justify-between  px-5 md:px-28 ">
            <div className="flex justify-start basis-1/2 ">
                <Logo>
                    <a href={"https://dataak.com/"} target="_blank">
                        <Icon src={logoDataak} className="mx-2" />
                    </a>
                </Logo>
                {data?.logo && (
                    <Logo>
                        <a href={"http://iran-elecomp.com/"} target="_blank">
                            <Icon src={data?.logo} className="mx-2" />
                        </a>
                    </Logo>
                )}
            </div>

            {/* <Link href={"/form"} className="flex justify-end basis-1/2 ">
                <Button>گزارش کسب‌وکار خودت رو داشته باش!</Button>
            </Link> */}
            <a
                href={
                    "https://dataak.com/%d8%a7%d8%b1%d8%aa%d8%a8%d8%a7%d8%b7-%d8%a8%d8%a7-%d8%af%db%8c%d8%aa%d8%a7%da%a9/"
                }
                target="_blank"
                className="flex justify-end basis-1/2 "
            >
                <Button>گزارش کسب‌وکار خودت رو داشته باش!</Button>
            </a>
        </CustomHeader>
    );
}
const CustomHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 1;
    background: ${({ theme }) => theme.colors?.["white"]};
    border-bottom: 1px solid #f8f9fa;
    min-height: 64px;
    z-index: 2;
`;
const Logo = styled.div`
    padding: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
        text-decoration: none;
    }
`;
