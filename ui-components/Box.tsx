import styled from "styled-components";
import type { CSSProperties } from "react";
import { memo } from "react";
interface BoxProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    style?: CSSProperties;
}

const WrapperBox = memo(styled.div`
    width: fit-content;
    background: ${({ theme }) => theme.colors?.["white"]};
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0px 4px 25px rgba(107, 134, 249, 0.2);
`);

export function Box({ children, className, style }: BoxProps) {
    return (
        <WrapperBox className={"w-full px-4 pt-16 " + className ? className : ""} style={style}>
            {children}
        </WrapperBox>
    );
}
