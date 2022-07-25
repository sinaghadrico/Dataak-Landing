import styled from "styled-components";
import React, { useMemo, useRef } from "react";
import { Chart, LineAdvance, Axis, Tooltip, Interaction } from "bizcharts";
import { getDateTime } from "utils/getDateTime";
import { convertToInternationalCurrencySystem } from "utils/convertToInternationalCurrencySystem";
import { commaSeperator } from "utils/commaSeperator";
import { Process } from "models/process";

interface LineChartProps {
    data: Process[];
}

export default function LineChart({ data = [] }: LineChartProps) {
    const chartRef = useRef(null);

    const chart = useMemo(
        () => (
            <div className="chart-container">
                <Chart padding={[5, 10, 30, 30]} data={data} autoFit renderer={"svg"}>
                    <Axis
                        name="count"
                        label={{
                            formatter: (val) => {
                                return val;
                            },
                            autoRotate: true,
                        }}
                    />
                    <Axis
                        name="count"
                        label={{
                            formatter: (val) => {
                                return convertToInternationalCurrencySystem(val, 1);
                            },
                            autoRotate: true,
                            offset: 30,
                        }}
                    />
                    <Tooltip
                        crosshairs={{
                            type: "y",
                        }}
                    >
                        {(_title, items) => {
                            return (
                                <div className="flex p-3">
                                    <div>{commaSeperator(items[0].value)}</div>
                                    <div>مطلب</div>
                                </div>
                            );
                        }}
                    </Tooltip>
                    <Interaction type="legend-filter" />
                    <LineAdvance shape="smooth" area size={3} position="time*count" color={"#6B86F9"} />
                </Chart>
            </div>
        ),
        [data],
    );

    return (
        <WrapperContainer className="px-3" ref={chartRef}>
            {data && chart}
        </WrapperContainer>
    );
}
const WrapperContainer = styled.div`
    height: 226px;
    * {
        font-family: "IranYekanNum";
    }
    .chart-container {
        width: 100%;
        height: 100%;

        @media (min-width: 760px) {
            min-width: 320px;
            max-width: 500px;
        }
        @media (max-width: 760px) {
            min-width: 180px;
            max-width: 500px;
        }
    }
`;
