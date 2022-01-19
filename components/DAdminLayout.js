import Head from "next/head";
import Layout from "antd/lib/layout/layout";
import { Row, Col } from 'antd';
import NavBar from "./NavBar"

export default function DLayout({ children }) {

    return (
        <Layout>
            <Head>
                <title>title 어드민</title>
            </Head>
            <Row>
                <Col span={24}>
                    <NavBar />
                    <div>{children}</div>
                </Col>
            </Row>
        </Layout>
        
    );
}