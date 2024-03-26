import React from "react";
import logo from "../../assets/logo-footer.png";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <ul>
                            <li>
                                <img src={logo} alt="" />
                            </li>
                            <li className="content">
                                <ul className="footer-icon">
                                    <li>
                                        <a href="" className="icon">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="icon">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="icon">
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="icon">
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <h3>VỀ CHÚNG TÔI</h3>
                        <ul>
                            <li className="content">
                                <a href="/about">
                                    <i class="fa-solid fa-angle-right"></i>
                                    Giới thiệu
                                </a>
                            </li>
                            <li className="content">
                                <a href="/contact">
                                    <i class="fa-solid fa-angle-right"></i>
                                    Liên hệ
                                </a>
                            </li>
                            <li className="content">
                                <a href="">
                                    <i class="fa-solid fa-angle-right"></i>
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li className="content">
                                <a href="">
                                    <i class="fa-solid fa-angle-right"></i>
                                    Chính sách bảo hành
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <h3>LIÊN HỆ</h3>
                        <ul>
                            <li className="content">
                                <i class="fa-solid fa-angle-right"></i>
                                Số điện thoại: 0779 767 361
                            </li>
                            <li className="content">
                                <i class="fa-solid fa-angle-right"></i>
                                Email: hotro@greennature.com
                            </li>
                            <li className="content">
                                <i class="fa-solid fa-angle-right"></i>
                                Địa chỉ: Hồ Chí Minh, Việt Nam
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="footer-bottom">
                Copyright &#169; 2024 <strong>Green Nature</strong> by <strong>Minh</strong>.
            </div>
        </div>
    );
};

export default Footer;
