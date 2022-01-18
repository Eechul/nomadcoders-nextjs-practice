import DCarousel from "../components/DCarousel";
import { Card, Col, Row } from 'antd';
import Link from "next/link";

export default function Home() {
    return (
        <>
            <DCarousel />
            <h3>최신 식단 [1월 2째주]</h3>
            <Row gutter={8}>
                <Col span={12}>
                    <Card>
                        <p className="week">월</p>
                        <p>돈까스</p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클</p>
                        <p>미역국</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <p className="week">화</p>
                        <p>돈까스</p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클<div style={{fontSize: 12, color: 'orange'}}>엄청 심😣</div></p>
                        <p>미역국</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col span={12}>
                    <Card>
                        <p className="week">수</p>
                        <p>돈까스</p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클</p>
                        <p>미역국</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <p className="week">목</p>
                        <p>돈까스<div style={{fontSize: 12, color: 'orange'}}>면역력 up</div></p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클</p>
                        <p>미역국</p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col span={12}>
                    <Card>
                        <p className="week">금</p>
                        <p>돈까스</p>
                        <p>감자볶음</p>
                        <p>김치</p>
                        <p>무피클</p>
                        <p>미역국</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Link href={"/menu"}>전체 식단 보기 =></Link>
                    </Card>
                </Col>
            </Row>
            <style jsx>{`
                p {
                    height: 40px;       
                }
                .week {
                    font-weight: 800;
                }
            `}</style>
        </>
    )
}
    