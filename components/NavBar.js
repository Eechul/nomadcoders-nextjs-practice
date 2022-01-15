import { Header } from "antd/lib/layout/layout";
import { Menu } from 'antd';
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <Header>
            <Menu mode="horizontal">
                <Menu.Item key="home">홈</Menu.Item>
                <Menu.Item key="about">식단</Menu.Item>
            </Menu>
        </Header>
    )
}