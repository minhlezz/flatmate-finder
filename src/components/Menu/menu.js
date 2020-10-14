import React from 'react';
import { Layout, Input, Divider } from 'antd';
import './../../styles/styles.css';
import "antd/dist/antd.css";
import FilterList from './filter/filter-list';
import HeaderList from './header-list/header-list';
import ContentList from './content-list/content-list';

const { Content, Footer, Sider } = Layout;
const { Search } = Input;




function MenuList() {


    return (
        <Layout className="site-layout " style={{ minHeight: '120vh' }}>
            <HeaderList />

            <Layout className="site-layout-background" style={{ padding: '5px 0' }}  >

                <Sider
                    className="site-layout-background"
                    width={350}
                >
                    <Search
                        className="search-bar"
                        size="large"
                        placeholder="Find ideal flatmates in your area"
                        onSearch={value => console.log(value)}
                        enterButton />
                    <FilterList />
                </Sider>

                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Divider dashed />
                    <ContentList />
                </Content>
            </Layout>

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default MenuList