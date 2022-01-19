import DCarousel from "../components/DCarousel";
import { Card, Col, Row } from 'antd';
import Link from "next/link";
import DFood from "../components/DFood";

export default function Home() {
    return (
        <>
            <DCarousel />
            <h3>최신 식단 [1월 2째주]</h3>
            <Row gutter={8}>
                <Col span={12}>
                    <Card>
                        <p className="week">월 </p>
                        <DFood tooltip={'면역력 up'}>돈까스</DFood>
                        <DFood>감자볶음</DFood>
                        <DFood>김치</DFood>
                        <DFood>무피클</DFood>
                        <DFood>미역국</DFood>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <p className="week">목</p>
                        <DFood tooltip={'면역력 up😆'}>돈까스</DFood>
                        <DFood>감자볶음</DFood>
                        <DFood>김치</DFood>
                        <DFood>무피클</DFood>
                        <DFood>미역국</DFood>
                    </Card>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col span={12}>
                    <Card>
                        <p className="week">월 </p>
                        <DFood tooltip={'면역력 up'}>돈까스</DFood>
                        <DFood>감자볶음</DFood>
                        <DFood tooltip={'직접 담궜으😖'}>김치</DFood>
                        <DFood>무피클</DFood>
                        <DFood>미역국</DFood>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <p className="week">목</p>
                        <DFood tooltip={'면역력 up'}>돈까스</DFood>
                        <DFood>감자볶음</DFood>
                        <DFood>김치</DFood>
                        <DFood tooltip={'😖조금 시어요😖'}>무피클</DFood>
                        <DFood>미역국</DFood>
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
    