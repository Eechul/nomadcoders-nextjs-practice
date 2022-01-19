import React, { useState } from "react";
import { Header } from "antd/lib/layout/layout";
import { Menu } from 'antd';
import Link from "next/link";
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter()
    const [clickKey, setClickKey] = useState();
    
    return (
        <>
            <Menu selectedKeys={[router.pathname]} mode="horizontal">
                <Menu.Item key={"/"}>
                    <Link href={"/"}>홈</Link>
                </Menu.Item>
                <Menu.Item key={"/menu"}>
                    <Link href={"/menu"}>식단</Link>
                </Menu.Item>
            </Menu>
            <style jsx>{`
            header {
                background: '#ffffff';
            }
            `}</style>
        </>
    )
}