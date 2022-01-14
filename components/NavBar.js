import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: blue;
                }
            `}</style>
        </nav>
    )
}