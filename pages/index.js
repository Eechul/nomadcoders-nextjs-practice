import DCarousel from "../components/DCarousel";
import { Modal, Progress } from 'antd';
import DMenu from "../components/DMenu";
import { useEffect } from "react";

export default function Home() {
    
    const showMd = () => {
        Modal.success({
            title: '미완성된 프로젝트에요 🥴',
            content: <><Progress type="circle" percent={75} /> 정도 됨..</>,
        })
    }

    useEffect(() => {
        showMd()
    }, [])
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
    