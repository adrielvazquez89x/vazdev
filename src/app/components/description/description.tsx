import Image from "next/image";
import style from "./description.module.css"
import vazdev from "@/../public/img/logodev_blkc.png"

export default function Description() {
    return (
        <div>
            <div className={style.logoMain}>
                <Image src={vazdev} width={200} height={100} alt="vazdev" className={style.logoMainImg} />
            </div>
            <div className={style.description}>
                <p >
                    En Vazdev, combinamos pasión y creatividad para ofrecerte soluciones digitales únicas.
                    Somos un equipo apasionado de programadores y diseñadores comprometidos en convertir tus ideas en realidad.
                    Aunque somos una empresa jóven, estamos listos para enfrentar cualquier desafío
                    y llevarte al siguiente nivel.
                </p>
            </div>
        </div>
    )
}
