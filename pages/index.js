import DCarousel from "../components/DCarousel";
import { Card, Col, Row } from 'antd';
import Link from "next/link";
import DMenu from "../components/DMenu";

export default function Home() {
    return (
        <>
            <DCarousel />
            <h3>최신 식단 [1월 2째주]</h3>
            <DMenu />
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
    