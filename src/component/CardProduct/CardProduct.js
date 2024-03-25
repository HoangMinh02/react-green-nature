import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import "./CardProduct.css";
import { Link } from "react-router-dom";
import { useCart } from "../../CardContext";

const CardProduct = ({ id, thumb, name, price, discount }) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    const convertedMoney = formatter.format(price);
    const convertDiscountMoney = formatter.format(price - price * (discount / 100));
    const { addToCart } = useCart();
    const handleAddCard = () => {
        toast.success("Add Card Successed!", {
            position: "top-center",
            autoClose: 1000,
        });
        const product = { id, thumb, name, price, discount };
        console.log(product);
        addToCart(product);
    };
    return (
        <Container pe={3}>
            <Row>
                <Col>
                    <Link to={`/detail/${id}`} className="card-product ">
                        <div class="product-thumb">
                            <img src={thumb} alt="" />
                            <div class="label_product">{discount > 0 && <span class="label_sale">{discount}%</span>}</div>
                        </div>
                        <div class="product-content">
                            <div class="product-desc">
                                <a class="product-title" href="" title="">
                                    {name}
                                </a>
                                <p className="product-price">
                                    <span className={` ${discount !== 0 && "priceOld"}`}>{convertedMoney}</span>{" "}
                                    <span>{discount !== 0 && <div className="priceDiscount">{convertDiscountMoney}</div>}</span>
                                </p>
                            </div>
                            <Button onClick={handleAddCard}>
                                <i class="fa-solid fa-bag-shopping"></i>
                            </Button>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default CardProduct;
