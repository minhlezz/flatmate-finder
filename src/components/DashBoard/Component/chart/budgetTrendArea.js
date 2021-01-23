import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLegend, VictoryLine, VictoryTheme } from 'victory';

function BudgetTrendArea() {
    const data = [
        { x: 1, y: 5000 },
        { x: 2, y: 3990 },
        { x: 3, y: 4422 },
        { x: 4, y: 5676 },
        { x: 5, y: 8000 },
        { x: 6, y: 6777 },
        { x: 7, y: 6555 },
        { x: 8, y: 7442 },
        { x: 9, y: 8544 },
        { x: 10, y: 9644 },
        { x: 11, y: 9888 },
        { x: 12, y: 10422 },
    ]
    const data2 = [
        { x: 1, y: 3467 },
        { x: 2, y: 2333 },
        { x: 3, y: 3122 },
        { x: 4, y: 2888 },
        { x: 5, y: 2266 },
        { x: 6, y: 3552 },
        { x: 7, y: 3433 },
        { x: 8, y: 3222 },
        { x: 9, y: 4229 },
        { x: 10, y: 4422 },
        { x: 11, y: 4552 },
        { x: 12, y: 3333 },
    ]
    return (
        <>
            <VictoryChart
                height={350}
                width={800}
                domainPadding={30}
                theme={VictoryTheme.material}
            >

                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    tickFormat={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                    label="Month"
                    style={{
                        axisLabel: { padding: 40 }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x}`)}

                />

                <VictoryLegend x={600} y={1}
                    centerTitle
                    orientation="vertical"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                    data={[
                        { name: "District 1", symbol: { fill: "black" } },
                        { name: "District 2", symbol: { fill: "#c43a31" } },
                    ]}
                />
                <VictoryLine
                    data={data}
                    style={{
                        data: { stroke: "#c43a31" }
                    }}
                />
                <VictoryLine
                    style={{
                        data: { stroke: "black" }
                    }}
                    data={data2}
                />
            </VictoryChart>
        </>
    )
}


export default BudgetTrendArea;