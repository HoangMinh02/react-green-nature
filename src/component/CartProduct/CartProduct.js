import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "./CartProduct.css";
import { useCart } from "../../CardContext";
import { Link } from "react-router-dom";

const CartProduct = () => {
    const { cart, deleteToCart } = useCart();
    const [listCart, setListCart] = useState(cart);

    const handleChange = (id, type) => {
        const newCart = [...listCart];
        const indexProduct = listCart.findIndex((item) => item.id === id);
        console.log(indexProduct);
        if (type === "plus") {
            newCart[indexProduct].quantity++;
        } else if (type === "minus") {
            if (newCart[indexProduct].quantity > 1) {
                newCart[indexProduct].quantity--;
            }
        } else if (type === "delete") {
            newCart.splice(indexProduct, 1);
            deleteToCart(indexProduct);
        }

        setListCart(newCart);
        localStorage.setItem("LIST_CART", JSON.stringify(newCart));
    };

    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    return (
        <div className="cart-product">
            {listCart.length === 0 ? (
                "Bạn chưa có sản phẩm nào"
            ) : (
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th className="product-name">Tên sản phẩm</th>
                                        <th className="product-thumbnail">Hình ảnh</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Tạm tính</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listCart &&
                                        listCart.map((item) => {
                                            const convertedMoney = formatter.format(item.price);
                                            const convertDiscountMoney = formatter.format(item.price - item.price * (item.discount / 100));
                                            const convertSubtotal1 = formatter.format(item.price * item.quantity);
                                            const convertSubtotal2 = formatter.format(
                                                (item.price - item.price * (item.discount / 100)) * item.quantity
                                            );
                                            return (
                                                <tr key={item.id}>
                                                    <td className="product-name">{item.name}</td>
                                                    <td className="product-thumbnail">
                                                        <img src={item.thumb} alt="" />
                                                    </td>
                                                    <td className="product-price">
                                                        <div className="price">
                                                            <span className={` ${item.discount !== 0 && "priceOld"}`}>{convertedMoney}</span>
                                                            <span>
                                                                {item.discount !== 0 && <div className="priceDiscount">{convertDiscountMoney}</div>}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <div className="plus-minus">
                                                            <i
                                                                type="minus"
                                                                onClick={() => handleChange(item.id, "minus")}
                                                                class="fa-solid fa-minus"
                                                            ></i>
                                                            <input name="quantity" type="text" value={item.quantity} />
                                                            <i type="plus" onClick={() => handleChange(item.id, "plus")} class="fa-solid fa-plus"></i>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <div className="price">
                                                            {item.discount === 0 ? (
                                                                <span className={` ${item.discount !== 0 && "priceOld"}`}>{convertSubtotal1}</span>
                                                            ) : (
                                                                <span>
                                                                    {item.discount !== 0 && <div className="priceDiscount">{convertSubtotal2}</div>}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="product-remove">
                                                        <span class="remove">
                                                            <i class="fa-solid fa-xmark" onClick={() => handleChange(item.id, "delete")}></i>
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} sm={12}>
                            <div className="total">
                                <h3>
                                    Tổng tiền:{" "}
                                    <span>
                                        {formatter.format(
                                            listCart.reduce((total, item) => {
                                                if (item.discount !== 0) {
                                                    return total + (item.price - item.price * (item.discount / 100)) * item.quantity;
                                                } else {
                                                    return total + item.price * item.quantity;
                                                }
                                            }, 0)
                                        )}
                                    </span>
                                </h3>
                                <Link to={"/order"}>
                                    <Button>Thanh toán</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row></Row>
                </Container>
            )}
        </div>
    );
};

export default CartProduct;
