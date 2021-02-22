import React, { useState } from 'react';
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryStack
} from 'victory';

import { Dropdown } from 'semantic-ui-react';

function HouseholdChart(props) {
    

    const year = [
        { quarter: 1, household: 322 },
        { quarter: 2, household: 350 },
        { quarter: 3, household: 220 },
        { quarter: 4, household: 112 },
        { quarter: 5, household: 122 }
    ];

    const month = [
        { quarter: 1, household: 133 },
        { quarter: 2, household: 112 },
        { quarter: 3, household: 65 },
        { quarter: 4, household: 34 },
        { quarter: 5, household: 38 }
    ];
    const week = [
        { quarter: 1, household: 7 },
        { quarter: 2, household: 12 },
        { quarter: 3, household: 10 },
        { quarter: 4, household: 6 },
        { quarter: 5, household: 3 }
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
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={['Q1','Q2','Q3','Q4','Binh Thanh',]}

                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`${x}`)}
                    label="Household"
                    style={{
                        axisLabel: { padding: 40 }
                    }}
                />
                <VictoryStack
                    colorScale={"green"}
                >
                    <VictoryBar
                        data={values}
                        x="quarter"
                        y="household"
                    />
                </VictoryStack>
            </VictoryChart>
        </>
    )
}

export default HouseholdChart;