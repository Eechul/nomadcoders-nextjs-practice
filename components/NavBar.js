import { Header } from "antd/lib/layout/layout";
import { Menu } from 'antd';
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <>
            <Header>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Link href={"/"}>홈</Link>
                    </Menu.Item>
                    <Menu.Item key="menu">
                        <Link href={"/menu"}>식단</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <style jsx>{`
            header {
                background: '#ffffff';
            }
            `}</style>
        </>
    )
}