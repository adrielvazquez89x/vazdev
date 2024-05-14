"use client"
import { useState, useEffect } from "react";
import style from "./slider.module.css";
import Button from "../button/button";
import Link from "next/link";
import Contacto from "@/app/contact/page";

interface Image {
    url: string;
    description: string;
    button: boolean;
}

const images: Image[] = [
    {
        url: "/img/slider/slider1a.jpg",
        description: "Transformando ideas en realidad digital",
        button: false
    },
    {
        url: "/img/slider/slider2a.jpg",
        description: "Construyendo tu presencia en línea",
        button: false
    },
    {
        url: "/img/slider/slider3a.jpg",
        description: "Innovación accesible para todos",
        button: true
    },
];

export default function SliderMain() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);

    return (
        <div className={style.heroSlider}>
            {images.map((image, index) => (
                <div key={index} className={`${style.slideWrapper} ${index === currentIndex ? style.active : ""}`}>
                    <div
                        className={`${style.slide} ${index === currentIndex ? style.active : ""}`}
                        style={{
                            backgroundImage: `url(${image.url})`,
                            transition: "opacity 0.5s ease-in-out",
                            opacity: index === currentIndex ? 1 : 0,
                        }}
                    >
                        <div className={style.description}>
                            <h2>{image.description}</h2>
                            {image.button ?
                                <Link href={"/contact"}>
                                    <Button txt="Saber mas" />
                                </Link>
                                :
                                ""}


                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}