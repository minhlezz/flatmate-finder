import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

const RangePickerCustom = () => {
   
    return (
        <RangePicker
            size = {"large"}
            ranges={{
                Today: [moment(), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
            }}
           
        />
    )
}

export default RangePickerCustom