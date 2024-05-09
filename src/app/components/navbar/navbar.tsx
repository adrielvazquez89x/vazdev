"use client"
import style from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavBar() {

    const links = [
        { url: "/", title: "Inicio" },
        { url: "/development", title: "Desarrollo" },
        { url: "/design", title: "Diseño" },
        { url: "/contact", title: "Contacto" },
    ];

    const pathname = usePathname();
    const [active, setActive] = useState(false);
    const handlerActive = ()=>{
        setActive(!active);
    }

    return (
        <div className={style.navBarContainer}>
            <div className="px-5 cursor-pointer" onClick={handlerActive}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <nav>
                <div className={`${style.navBar} ${ active ? style.active : ""}`}>
                    {links.map(link => (
                        <div className={`${style.linkContainer} ${pathname == link.url ? style.active : ""}`} >
                            <Link href={link.url} key={link.title}>
                                {link.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>

        </div>

    )
}
