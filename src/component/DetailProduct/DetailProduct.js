import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import useFetch from "../../useFetch";
import "./DetailProduct.css";
import { toast } from "react-toastify";
import { useCart } from "../../CardContext";

const DetailProduct = () => {
    const { slug: id } = useParams();
    const detailProduct = useFetch(`https://65f40b4c105614e654a1c62c.mockapi.io/product/${id}`);
    const [image, setImage] = useState();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    useEffect(() => {
        setImage(detailProduct.thumb);
    }, [detailProduct]);
    const handleImage = (image) => {
        setImage(image);
    };
    useEffect(() => {
        const handleResize = () => {
            // Cập nhật số lượng slidesToShow và slidesToScroll dựa trên kích thước màn hình
            let slidesToShow = 3;
            let slidesToScroll = 2;
            if (window.innerWidth <= 768) {
                slidesToShow = 3;
                slidesToScroll = 2;
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
        autoplaySpeed: 3000,
        cssEase: "linear",
    });
    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    const convertedMoney = formatter.format(detailProduct.price);
    const convertDiscountMoney = formatter.format(detailProduct.price - detailProduct.price * (detailProduct.discount / 100));

    const handleAddCart = () => {
        toast.success("Add Card Successed!", {
            position: "top-center",
            autoClose: 1000,
        });
        addToCart(detailProduct, quantity);
    };
    const handleChange = (type) => {
        if (type === "plus") {
            setQuantity(quantity + 1);
        } else if (type === "minus") {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    };

    return (
        <div className="detail">
            <Container>
                <Row>
                    <Col md={6}>
                        <img className="thumb" src={image} alt="" />
                        <Slider {...settings}>
                            {detailProduct.thumb_detail &&
                                detailProduct.thumb_detail.map((item) => <img onClick={() => handleImage(item)} src={item} alt="" />)}
                        </Slider>
                    </Col>
                    <Col md={6}>
                        <div className="title">
                            <h2>{detailProduct.name}</h2>
                            <div className="is-bottom"></div>
                            <p className="product-price">
                                <span className={` ${detailProduct.discount !== 0 && "priceOld"}`}>{convertedMoney}</span>{" "}
                                <span>{detailProduct.discount !== 0 && <div className="priceDiscount">{convertDiscountMoney}</div>}</span>
                            </p>
                            <p>{detailProduct.description}</p>
                            <p>
                                <span>Danh mục:</span> {detailProduct.category}
                            </p>
                        </div>
                        <div className="choose">
                            <div className="plus-minus">
                                <i type="minus" onClick={() => handleChange("minus")} class="fa-solid fa-minus"></i>
                                <input name="quantity" type="text" value={quantity} />
                                <i type="plus" onClick={() => handleChange("plus")} class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <button className="btn-cart" onClick={handleAddCart}>
                            Thêm sản phẩm
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailProduct;
