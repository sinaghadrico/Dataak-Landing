import styled from "styled-components";
import type { InputHTMLAttributes } from "react";
import { memo } from "react";
import { Icon } from "./Icon";

interface RangeProps {
    value: number;
    min?: string;
    max?: string;
}

export function Range({ value = 0 }: RangeProps) {
    const percent: number =
        value > 0 ? Number(50 - Math.floor(Number(value) / 2)) : Number(50 + Math.floor((Number(value) * -1) / 2));

    const icon = value > 0 ? "ri-emotion-happy-line" : "ri-emotion-normal-line";

    const CustomWrapperRangeValue = memo(styled.div`
        position: absolute;
        top: -35px;
        color: ${value > 0 ? "#19CE7F" : "#F7936F"};

        font-size: 20px;
    `);

    return (
        <CustomWrapperRange>
            <CustomWrapperRangeLine className="line flex-1">
                <CustomWrapperRangePointer
                    className="pointer"
                    style={{
                        right: percent + "%",
                    }}
                ></CustomWrapperRangePointer>
                <CustomWrapperRangeValue
                    className="value"
                    style={{
                        right: `calc(${percent}% - 8px)`,
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
    position: relative;
`);
const CustomWrapperRangeLine = memo(styled.div`
    height: 6px;
    margin: 0 0px;
    border-radius: 8px;
    /* transform: rotate(-180deg); */
    background: linear-gradient(90deg, #f16063 0%, #f7936f 49.48%, #17ce7f 100%);
    position: relative;
`);

const CustomWrapperRangePointer = memo(styled.div`
    position: absolute;
    width: 4px;
    height: 16px;
    top: -4.2px;
    background: #ffffff;
    border: 1px solid #e1e8ff;
    border-radius: 2px;
`);
