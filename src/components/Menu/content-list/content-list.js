import React from 'react';
import { Card, Avatar, Col, Row, Layout } from 'antd';


const { Meta } = Card;

function ContentList() {



    return (

        <div className="site-card-wrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 400 }}
                        cover={
                            <img
                                className='item'
                                alt="example"
                                src="
                                https://cdn.bongdaplus.vn/Assets/Media/2020/10/13/66/ro.jpg
                                "
                            />

                        }
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="USER NAME"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        style={{ width: 400 }}
                        size="default"
                        cover={
                            <img
                                className='item'
                                alt="example"
                                src="https://chelseafclatestnews.com/wp-content/uploads/2019/12/Why-Didier-Drogba-took-selfie-with-Kylian-Mbappe-at-Ballon-dOr-ceremony.jpg"
                            />
                        }
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="USER NAME"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        style={{ width: 400 }}
                        cover={
                            <img
                                className='item'
                                alt="example"
                                src="
                                https://vcdn1-giaitri.vnecdn.net/2020/10/07/emilyinparisfb-1602058550-3547-1602058555.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=cR2EQaxY0kj4WWtfz8yyXQ
                                "
                            />
                        }
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="USER NAME"
                            description="This is the description"
                        />
                    </Card>
                </Col>

                <Col span={8}>
                    <Card
                        style={{ width: 400 }}
                        cover={
                            <img
                                className='item'
                                alt="example"
                                src="
                                https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed670179e384f0007b7db8f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1032%26cropX2%3D3642%26cropY1%3D186%26cropY2%3D2795
                               "
                            />
                        }
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="USER NAME"
                            description="This is the description"
                        />
                    </Card>
                </Col>


                <Col span={8}>
                    <Card
                        style={{ width: 400 }}
                        cover={
                            <img
                                className='item'
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="USER NAME"
                            description="This is the description"
                        />
                    </Card>
                </Col>

                <Col span={8}>
                    <Card
                        style={
                            { width: 400 }
                        }
                        cover={
                            <img
                                className='item'
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="USER NAME"
                            description="This is the description"
                        />
                    </Card>
                </Col>


            </Row>
        </div>


    );

}


export default ContentList;