import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLegend, VictoryLine, VictoryTheme } from 'victory';

function BudgetTrendArea() {
    const data = [
        { x: 1, y: 3433 },
        { x: 2, y: 3342 },
        { x: 3, y: 3211 },
        { x: 4, y: 3440 },
        { x: 5, y: 3544 },
        { x: 6, y: 3949 },
        { x: 7, y: 4002 },
        { x: 8, y: 4125 },
        { x: 9, y: 4221 },
        { x: 10, y: 4354 },
        { x: 11, y: 4300 },
        { x: 12, y: 4500 },
    ];
    const data2 = [
        { x: 1, y: 3467 },
        { x: 2, y: 3322 },
        { x: 3, y: 3122 },
        { x: 4, y: 3242 },
        { x: 5, y: 3231 },
        { x: 6, y: 3123 },
        { x: 7, y: 3433 },
        { x: 8, y: 3222 },
        { x: 9, y: 3244 },
        { x: 10, y: 3543 },
        { x: 11, y: 3213 },
        { x: 12, y: 3333 },
    ];
    const data3 = [
        { x: 1, y: 1000 },
        { x: 2, y: 2333 },
        { x: 3, y: 3122 },
        { x: 4, y: 3222 },
        { x: 5, y: 3444 },
        { x: 6, y: 3552 },
        { x: 7, y: 3433 },
        { x: 8, y: 3222 },
        { x: 9, y: 2774 },
        { x: 10, y: 2445 },
        { x: 11, y: 2556 },
        { x: 12, y: 2888 },
    ];
    const data4 = [
        { x: 1, y: 3467 },
        { x: 2, y: 2333 },
        { x: 3, y: 2345 },
        { x: 4, y: 2888 },
        { x: 5, y: 2786 },
        { x: 6, y: 2884 },
        { x: 7, y: 2992 },
        { x: 8, y: 3122 },
        { x: 9, y: 3002 },
        { x: 10, y: 2990 },
        { x: 11, y: 2888 },
        { x: 12, y: 2821 },
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
                        { name: "District 1", symbol: { fill: "#c43a31" } },
                        { name: "District 2", symbol: { fill: "black" } },
                        { name: "District 3", symbol: { fill: "cyan" } },
                        { name: "District 4", symbol: { fill: "gold" } },
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
                 <VictoryLine
                    style={{
                        data: { stroke: "cyan" }
                    }}
                    data={data3}
                />
                 <VictoryLine
                    style={{
                        data: { stroke: "gold" }
                    }}
                    data={data4}
                />
               
            </VictoryChart>
        </>
    )
}


export default BudgetTrendArea;