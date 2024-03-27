import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useCart } from "../../CardContext";
import axios from "axios";
import "./Order.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Order = () => {
    const { cart, deleteAllCart } = useCart();
    const [listCart, setListCart] = useState(cart);
    console.log(cart);
    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        note: "",
    });
    const handleValue = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        console.log(form);
    };
    // Xac thuc sdt
    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/; // Gia su sdt VN co 10 số
        return phoneRegex.test(phoneNumber);
    };
    const sendInformOrder = async (e) => {
        e.preventDefault();
        if (!form.fullName || !form.phone || !form.email || !form.address || !form.note) {
            toast.warn("Vui lòng nhập đủ thông tin", {
                position: "top-center",
                autoClose: 2000,
            });
        } else if (!validatePhoneNumber(form.phone)) {
            toast.warn("Số điện thoại không hợp lệ", {
                position: "top-center",
                autoClose: 2000,
            });
            // setPhoneError("Số điện thoại không hợp lệ");
        } else {
            emailjs.sendForm("service_395cbvb", "template_av35drr", e.target, "Z410pJ5PAXMpMgaoP").then(
                (result) => {
                    toast.success("Đặt hàng thành công", {
                        position: "top-center",
                        autoClose: 2000,
                    });
                },
                (error) => {
                    toast.warn(`${error.text}`, {
                        position: "top-center",
                        autoClose: 2000,
                    });
                }
            );
            try {
                const result = await axios.post("https://65f40b4c105614e654a1c62c.mockapi.io/Order", {
                    ...form,
                    listProduct: [...cart],
                });

                if (result.status === 201) {
                    navigate("/");
                    deleteAllCart();
                }
            } catch (error) {
                toast.error("Không thể đặt hàng", {
                    position: "top-center",
                    autoClose: 2000,
                });
            }
        }
    };
    return (
        <div className="order">
            <Container>
                <form onSubmit={sendInformOrder}>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="inform">
                                <h2>THANH TOÁN VÀ GIAO HÀNG</h2>
                                <div className="name">
                                    <input type="text" name="fullName" placeholder="Họ và tên" onChange={handleValue} />
                                </div>
                                <div className="address">
                                    <input type="text" name="phone" placeholder="Số điện thoại" onChange={handleValue} />
                                    <input type="email" name="email" placeholder="Email" onChange={handleValue} />
                                    <input type="text" name="address" placeholder="Địa chỉ" onChange={handleValue} />
                                </div>
                                <textarea name="note" id="" cols="40" rows="10" placeholder="Note" onChange={handleValue}></textarea>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="cartOrder">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th className="product-name">Tên sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Tạm tính</th>
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
                                                        {/* <td className="product-thumbnail">
                                                            <img src={item.thumb} alt="" />
                                                        </td> */}
                                                        <td className="product-name">{item.name}</td>
                                                        <td className="product-quantity">
                                                            <div className="plus-minus">
                                                                <input name="quantity" type="text" value={item.quantity} />
                                                            </div>
                                                        </td>
                                                        <td className="product-subtotal">
                                                            <div className="price">
                                                                {item.discount === 0 ? (
                                                                    <span className={` ${item.discount !== 0 && "priceOld"}`}>
                                                                        {convertSubtotal1}
                                                                    </span>
                                                                ) : (
                                                                    <span>
                                                                        {item.discount !== 0 && (
                                                                            <div className="priceDiscount">{convertSubtotal2}</div>
                                                                        )}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </Table>
                            </div>
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
                                <Button type="submit">Đặt hàng</Button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Container>
        </div>
    );
};

export default Order;
