import logo from "assets/pngs/logo.png";
import logoLanding from "assets/pngs/logo-landing.png";
import useData from "services/useData";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Icon } from "@ui-components/Icon";
import { Text } from "@ui-components/Text";
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

    const CustomHeader = styled.header`
        /* position: sticky;
        top: 0;
        z-index: 1; */
        padding: 5px 5px;
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

    return (
        <CustomHeader className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8 ">
            <Logo>
                <Link href={"/"}>
                    <Icon src={logo} className="mr-2" />
                </Link>
            </Logo>
            <Button>گزارش کسب‌وکار خودت رو داشته باش!</Button>
            <Icon src="ri-add-line" />
            {/* <Icon src={logo} /> */}
            <Icon src={logoLanding} />
        </CustomHeader>
    );
}
