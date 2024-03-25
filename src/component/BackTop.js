import React, { useEffect, useState } from "react";
import "./BackTop.css";

const BackTop = () => {
    const [backTop, setBackTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 200 ? setBackTop(true) : setBackTop(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={`back-top ${backTop ? "active" : ""}`} onClick={scrollToTop}>
            <i class="fa-solid fa-arrow-up"></i>
        </div>
    );
};

export default BackTop;
