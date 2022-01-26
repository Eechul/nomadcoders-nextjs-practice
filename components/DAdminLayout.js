import Head from "next/head";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function DLayout({ children }) {

    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={false}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              대시보드
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              게시판
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
              공지사항
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
            {children}
          <Footer style={{ textAlign: 'center' }}>©2022</Footer>
        </Layout>
        <style jsx>{`
            .logo {
                height: 32px;
                margin: 16px;
                background: rgba(255, 255, 255, 0.3);
            }
            .site-layout .site-layout-background {
                background: #fff;
            }
        `}</style>
      </Layout>
        
    );
}