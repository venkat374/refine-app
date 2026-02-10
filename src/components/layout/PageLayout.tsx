import React from 'react';
import { Outlet } from 'react-router-dom';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigation } from '@refinedev/core';

const { Header, Content, Footer, Sider } = Layout;

export const PageLayout = () => {
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
    const { list } = useNavigation();

    const menuItems = [
        { key: 'users', icon: <UserOutlined />, label: 'Users', onClick: () => list("users") },
        { key: 'videos', icon: <VideoCameraOutlined />, label: 'Videos', onClick: () => list("videos") },
        { key: 'uploads', icon: <UploadOutlined />, label: 'Uploads', onClick: () => list("uploads") },
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <div style={{ height: 32, margin: 16, background: 'rgba(255,255,255,.2)', borderRadius: 6 }} />
                <Menu theme="dark" mode="inline" items={menuItems} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>

                        <Outlet /> 
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};