import logoDataak from "assets/pngs/logo.png";
import logoLanding from "assets/pngs/logo-landing.png";
import useData from "services/useData";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Icon } from "@ui-components/Icon";
import { Button } from "@ui-components/Button";

export default function Header() {
    const { push } = useRouter();
    const { getDetails } = useData();
    const { data } = useSWR([`getDetails`], getDetails);

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
        <CustomHeader className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-2 lg:gap-10 ">
            <div className="flex">
                <Logo>
                    <a href={"https://dataak.com/"} target="_blank">
                        <Icon src={logoDataak} className="mx-2" />
                    </a>
                </Logo>
                <Logo>
                    <a href={"http://iran-elecomp.com/"} target="_blank">
                        <Icon src={logoLanding} className="mx-2" />
                    </a>
                </Logo>
            </div>

            <Link href={"/form"}>
                <Button>گزارش کسب‌وکار خودت رو داشته باش!</Button>
            </Link>
        </CustomHeader>
    );
}
const CustomHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 6px 4px;
    background: ${({ theme }) => theme.colors?.["white"]};
    min-height: 52px;
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
