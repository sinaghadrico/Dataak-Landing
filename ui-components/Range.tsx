import styled from "styled-components";
import type { InputHTMLAttributes } from "react";
import { memo } from "react";
import { Icon } from "./Icon";

interface RangeProps {
    value: number;
    min?: string;
    max?: string;
}

export function Range({ value, min = "0", max = "100" }: RangeProps) {
    const persent: number = value > 100 ? 100 : Number(Number(value)?.toFixed());
    const icon = persent >= 50 ? "ri-emotion-happy-line" : "ri-emotion-normal-line";
    return (
        <CustomWrapperRange>
            <CustomWrapperRangeLine className="line flex-1">
                <CustomWrapperRangePointer
                    className="pointer"
                    style={{
                        left: persent + "%",
                    }}
                ></CustomWrapperRangePointer>
                <CustomWrapperRangeValue
                    className="value"
                    style={{
                        left: persent - 1 + "%",
                    }}
                >
                    <Icon src={icon} />
                </CustomWrapperRangeValue>
            </CustomWrapperRangeLine>
        </CustomWrapperRange>
    );
}

const CustomWrapperRange = memo(styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20px;
    margin: 20px 0;
`);
const CustomWrapperRangeLine = memo(styled.div`
    height: 6px;
    margin: 0 10px;
    border-radius: 8px;
    /* transform: rotate(-180deg); */
    background: linear-gradient(90deg, #17ce7f 0%, #f7936f 49.48%, #f16063 100%);
    position: relative;
`);

const CustomWrapperRangePointer = memo(styled.div`
    position: relative;
    width: 4px;
    height: 16px;
    top: -4.2px;
    background: #ffffff;
    border: 1px solid #e1e8ff;
    border-radius: 2px;
`);

const CustomWrapperRangeValue = memo(styled.div`
    position: relative;
    top: 0px;

    font-size: 20px;
`);
