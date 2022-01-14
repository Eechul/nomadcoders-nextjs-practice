import Layout, { Footer, Content, Header } from "antd/lib/layout/layout";
import { Menu, Breadcrumb, Row, Col } from 'antd';
import Link from "next/link";
import { useRouter } from "next/router";
import 'antd/dist/antd.css';

export default function App({Component, pageProps}) {
    const router = useRouter();
    return (
        <>
            <Layout >
                <Row justify="center">
                    <Col span={12}>
                        <Header>
                            <Menu mode="horizontal">
                                <Menu.Item key="home">홈</Menu.Item>
                                <Menu.Item key="about">식단</Menu.Item>
                            </Menu>
                        </Header>
                        <Content>
                            <Component {...pageProps} />
                        </Content>
                        <Footer>Footer</Footer>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}