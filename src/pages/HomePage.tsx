import React from 'react';
import { Button, Card, Col, Row, Typography, Space, Statistic } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigation } from '@refinedev/core';

const { Title, Text } = Typography;

const HomePage = () => {
    const { list } = useNavigation();

    return (
        <Card style={{ maxWidth: 600}}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>

                <div style={{ marginBottom: '20px' }}>
                    <Title>User Mangement</Title>
                    <Title level={4} type="secondary">The following are some statistics</Title>
                </div>

                <Row gutter={9}>
                    <Col span={6}>
                        <Card>
                            <Statistic 
                                title="User Count"
                                value={2}
                                valueStyle={{ color: 'red' }}
                            />
                        </Card>
                    </Col>

                </Row>
            </Space>
        </Card>
    );
}

export default HomePage;