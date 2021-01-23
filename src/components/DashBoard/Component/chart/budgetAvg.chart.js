import React from 'react';
import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryLegend,
    VictoryLine,
    VictoryScatter,
    VictoryTheme,
} from 'victory';

function BudgetAvgChart() {

    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
        { quarter: 5, earnings: 12301 }
    ];
    const data2 = [
        { quarter: 1, earnings: 1300 },
        { quarter: 2, earnings: 12200 },
        { quarter: 3, earnings: 9950 },
        { quarter: 4, earnings: 14100 },
        { quarter: 5, earnings: 15432 }
    ];
    return (

        <VictoryChart
            domainPadding={40}
            theme={VictoryTheme.material}
            animate={{
                duration: 1000,
                onLoad: { duration: 500 }
            }}
            height={350}
            width={800}
        >
            <VictoryLegend x={600} y={1}
                centerTitle
                orientation="vertical"
                gutter={20}
                style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                data={[
                    { name: "Your current budget", symbol: { fill: "gold", type: "star" } },
                    { name: "Flatmate budget average", symbol: { fill: "aqua" } },
                    { name: "Household budget average", symbol: { fill: "#ccc" } },
                ]}
            />
            <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={['Q1', 'Q2', 'Q3', 'Q4', 'Binh Thanh',]}


            />
            <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={(x) => (`${x}`)}

            />
            <VictoryGroup
                offset={25}
                colorScale={"qualitative"}
            >
                <VictoryBar
                    data={data}
                    x="quarter"
                    y="earnings"
                />
                <VictoryBar
                    data={data2}
                    x="quarter"
                    y="earnings"
                />
            </VictoryGroup>
            <VictoryLine
                style={{
                    parent: { border: "1px solid #ccc" }
                }}
                data={data}
                x="quarter"
                y="earnings"
            />
            <VictoryLine
                style={{
                    data: { stroke: "aqua" },
                    parent: { border: "1px solid #ccc" }
                }}
                data={data2}
                x="quarter"
                y="earnings"
            />
            <VictoryScatter
                style={{ data: { fill: "yellow" } }}
                data={[
                    { x: 1, y: 7000, symbol: "star", size: 10 },
                ]}
            />
        </VictoryChart>
    );
}

export default BudgetAvgChart;