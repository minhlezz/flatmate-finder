import React, { useState } from 'react';
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
} from 'victory';

import { Dropdown } from 'semantic-ui-react';

function FlatmateChart(props) {

    const year = [
        { quarter: 1, flatmate: 551 },
        { quarter: 2, flatmate: 759 },
        { quarter: 3, flatmate: 432 },
        { quarter: 4, flatmate: 112 },
        { quarter: 5, flatmate: 98 }
    ];

    const month = [
        { quarter: 1, flatmate: 120 },
        { quarter: 2, flatmate: 150 },
        { quarter: 3, flatmate: 77 },
        { quarter: 4, flatmate: 30 },
        { quarter: 5, flatmate: 10 }
    ];
    const week = [
        { quarter: 1, flatmate: 7 },
        { quarter: 2, flatmate: 12 },
        { quarter: 3, flatmate: 10 },
        { quarter: 4, flatmate: 6 },
        { quarter: 5, flatmate: 3 }
    ];
    const [values, setValues] = useState(year);

    const options = [
        { key: 1, text: 'Year', value: 1 },
        { key: 2, text: 'Month', value: 2 },
        { key: 3, text: 'Week', value: 3 },
    ]
    const handleChange = (e, { value }) => {
        if (value === 1) {
            setValues(year);
        } else if (value === 2) {
            setValues(month);
        } else if (value === 3) {
            setValues(week);
        }
    }



    return (
        <>
            <Dropdown
                selection
                options={options}
                onChange={handleChange}
                defaultValue={1}
            />
            <VictoryChart
                domainPadding={20}
                theme={VictoryTheme.material}
                animate={{
                    duration: 1000,
                    onLoad: { duration: 500 }
                }}
            >
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
                    label="Flatmate"
                    style={{
                        axisLabel: { padding: 40 }
                    }}
                />
                <VictoryBar
                    data={values}
                    x="quarter"
                    y="flatmate"
                />
            </VictoryChart>
        </>
    )
}

export default FlatmateChart;