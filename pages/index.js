import DCarousel from "../components/DCarousel";
import { Card, Col, Row } from 'antd';

export default function Home() {
    return (
        <>
            <DCarousel />
            <h3>최신 식단 [1월 2째주]</h3>
            <Row gutter={16}>
                <Col span={4}>
                    <Card>
                        <p>월</p>
                        <p>돈까스</p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클</p>
                        <p>미역국</p>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <p>화</p>
                        <p>돈까스</p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클</p>
                        <p>미역국</p>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <p>수</p>
                        <p>돈까스</p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클</p>
                        <p>미역국</p>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <p>목</p>
                        <p>돈까스</p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클</p>
                        <p>미역국</p>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card>
                        <p>금</p>
                        <p>돈까스</p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클</p>
                        <p>미역국</p>
                    </Card>
                </Col>
            </Row>
            
        </>
    )
}
    