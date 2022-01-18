import Head from "next/head";
import Layout from "antd/lib/layout/layout";
import { Row, Col } from 'antd';
import NavBar from "./NavBar"

export default function DLayout({ children }) {

    return (
        <Layout>
            <Head>
                <title>title</title>
            </Head>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <NavBar />
                    <div>{children}</div>
                </Col>
            </Row>
        </Layout>
        
    );
}