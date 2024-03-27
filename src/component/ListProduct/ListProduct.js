import React, { useEffect, useState } from "react";
import CardProduct from "../CardProduct/CardProduct";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../useFetch";
import "./ListProduct.css";

const ListProduct = () => {
    const listProduct = useFetch("https://65f40b4c105614e654a1c62c.mockapi.io/product");
    useEffect(() => {
        const handleResize = () => {
            // Cập nhật số lượng slidesToShow và slidesToScroll dựa trên kích thước màn hình
            let slidesToShow = 4;
            let slidesToScroll = 2;
            if (window.innerWidth <= 991) {
                slidesToShow = 3;
                slidesToScroll = 1;
            }
            if (window.innerWidth <= 576) {
                slidesToShow = 2;
                slidesToScroll = 1;
            }
            setSettings({
                ...settings,
                slidesToShow,
                slidesToScroll,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Gọi hàm một lần để cài đặt ban đầu

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures that effect runs only once on mount

    const [settings, setSettings] = useState({
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    });
    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    return (
        <div>
            <Container>
                <div className="headline">
                    <h3 className="title">SẢN PHẨM MỚI</h3>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {listProduct &&
                            listProduct.map((item) => (
                                <CardProduct
                                    id={item.id}
                                    thumb={item.thumb}
                                    name={item.name}
                                    price={item.price}
                                    discount={item.discount}
                                ></CardProduct>
                            ))}
                    </Slider>
                </div>
                <div className="headline">
                    <h3 className="title">SẢN PHẨM GIẢM GIÁ</h3>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {listProduct &&
                            listProduct.map((item) => {
                                if (item.discount !== 0) {
                                    return (
                                        <CardProduct
                                            id={item.id}
                                            thumb={item.thumb}
                                            name={item.name}
                                            price={item.price}
                                            discount={item.discount}
                                        ></CardProduct>
                                    );
                                }
                            })}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default ListProduct;
