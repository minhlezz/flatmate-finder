import React, { useState } from 'react';
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryStack
} from 'victory';


function Chart(props) {
    const users = props.users;
    const district = users.map(u => {
        return u.districtCityUser
    });

    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
        { quarter: 5, earnings: 7233 }
    ];
    
   
    return (
        <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}
        >
            <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={district}
                label="Area"
                style={{
                    axisLabel: { padding: 30 }
                }}
            />
            <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={(x) => (`$${x / 1000}k`)}
                label="Budget Average"
                style={{
                    axisLabel: { padding: 40 }
                }}
            />
            <VictoryStack
                colorScale={"green"}
            >
                <VictoryBar
                    data={data}
                    x="quarter"
                    y="earnings"
                />
            </VictoryStack>

        </VictoryChart>
    )
}

export default Chart;