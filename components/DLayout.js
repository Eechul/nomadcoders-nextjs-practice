import Layout from "antd/lib/layout/layout";
import { Row, Col } from 'antd';
import NavBar from "./NavBar"

export default function DLayout({ children }) {

    return (
        <Layout >
            <Row justify="center">
                <Col span={12}>
                    <NavBar />
                    <div>{children}</div>
                </Col>
            </Row>
        </Layout>
    );
}