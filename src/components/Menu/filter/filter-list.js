import React, { Component } from 'react';
import { Menu, Slider, Radio, DatePicker } from 'antd';
import moment from 'moment';

const { SubMenu } = Menu;


class FilterList extends Component {
    render() {
        const markBudget = {
            0: '0$',
            10000: '10000$'
        };

        const markAge = {
            0: '0',
            100: '100'
        };

        const plainOptions = ['Male', 'Female', 'Either'];
        const binOptions = ['Yes', 'No'];
        const occupationOptions = ['Student', 'Freelancer', 'Professional'];

        const dateFormat = 'YYYY/MM/DD';

        return (

            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                style={{ height: '90%' }}
                theme="light"
            >
                <SubMenu key="sub1" title="Budget">
                    <Menu.Item key="5">
                        <Slider range marks={markBudget} step={10} min={0} max={10000} defaultValue={[10, 20]} />
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title="Age">
                    <Menu.Item key="6">
                        <Slider marks={markAge} range step={1} min={0} max={100} defaultValue={[10, 20]} />
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Gender">
                    <Menu.Item key="7">
                        <Radio.Group options={plainOptions} />
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title="Pet">
                    <Menu.Item key="5">
                        <Radio.Group options={binOptions} />
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" title="Occupation">
                    <Menu.Item key="6">
                        <Radio.Group options={occupationOptions} />
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub7" title="Move In Date">
                    <Menu.Item key="7">
                        <DatePicker size={"large"}
                            style={{ width: '250px' }}
                            defaultValue={moment('2020/09/26', dateFormat)} format={dateFormat} />                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub8" title="Location">
                    <Menu.Item key="8">
                        Google Maps
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub9" title="Other">
                    <Menu.Item key="9">
                        Modal Other
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }

}


export default FilterList;