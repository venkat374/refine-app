import React from 'react';
import { Button, Card, Col, Row, Typography, Space, Statistic } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigation } from '@refinedev/core';

const { Title, Text } = Typography;

const HomePage = () => {
    const { list } = useNavigation();

    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>

            <div style={{ marginBottom: '20px' }}>
                <Title>User Mangement</Title>
                <Title level={4} type="secondary">The following are some statistics</Title>
            </div>

            <Row gutter={6}>
                <Col span={3}>
                <Card>
                    <Statistic 
                        title="User Count"
                        value={2}
                        valueStyle={{ color: 'red' }}
                    />
                </Card>
                </Col>

            </Row>

            <Button 
                type="default" 
                size="large" 
                icon={<UserOutlined />} 
                onClick={() => list("users")}
            >
                View Users
            </Button>
        </Space>
    );
}

export default HomePage;