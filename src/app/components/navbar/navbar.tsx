"use client"
import style from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../../../../public/img/logo.png";
import Image from "next/image";

export default function NavBar() {

    const links = [
        { url: "/", title: "Inicio" },
        { url: "/development", title: "Desarrollo" },
        { url: "/design", title: "Diseño" },
        { url: "/works", title: "Trabajos" },
        { url: "/contact", title: "Contacto" },
    ];

    const pathname = usePathname();
    const [active, setActive] = useState(false);
    const handlerActive = () => {
        setActive(!active);
    }

    return (
        <div className={style.navBarContainer}>
            {/* Logo */}
            <div className="px-5">
                <Image src={logo} width={64} height={64} alt="logo" />
            </div>
            {/* Menu */}
            <div className={style.btnMenu} onClick={handlerActive}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            {/* Enlaces */}
            <nav className={`${style.navBar} ${active ? style.active : ""}`}>
                
                    {links.map(link => (
                        <div className={`${style.linkContainer} ${pathname == link.url ? style.active : ""}`} >
                            <Link href={link.url} key={link.title}>
                                {link.title}
                            </Link>
                        </div>
                    ))}
                
            </nav>

        </div>

    )
}
