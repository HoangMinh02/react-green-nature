import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../CardContext";

const Header = () => {
    const { cart } = useCart();
    const [keySearch, setKeySearch] = useState();
    const navigate = useNavigate();
    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            console.log(keySearch);
            navigate(`/search/${keySearch}`);
            setKeySearch("");
        }
    };
    return (
        <div className="header">
            <Container>
                <div className="header-info">
                    <div className="left">
                        <ul>
                            <li>
                                <a href="">
                                    <i class="fa-regular fa-clock"></i>
                                    8:30 - 18:00
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa-solid fa-phone"></i>
                                    0779 767 361
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100069716288106&mibextid=ZbWKwL" target="_blank">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100069716288106&mibextid=ZbWKwL" target="_blank">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100069716288106&mibextid=ZbWKwL" target="_blank">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100069716288106&mibextid=ZbWKwL" target="_blank">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="header-main">
                <Navbar expand="lg" className="bg-body-dark">
                    <Container>
                        <NavLink to="/">
                            <img src={logo} alt="" />
                        </NavLink>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="choice me-auto my-5 my-lg-0" navbarScroll>
                                <NavLink to="/">TRANG CHỦ</NavLink>
                                <NavLink to="/about">GIỚI THIỆU</NavLink>
                                <NavLink to="/product">SẢN PHẨM</NavLink>
                                <NavLink to="/blog">TIN TỨC</NavLink>
                                <NavLink to="/contact">LIÊN HỆ</NavLink>
                            </Nav>
                            <div className="search d-flex">
                                <Form.Control
                                    type="search"
                                    value={keySearch}
                                    placeholder="Tìm kiếm sản phẩm"
                                    className="inputSearch me-2"
                                    aria-label="Search"
                                    onChange={(e) => setKeySearch(e.target.value)}
                                    onKeyDown={handleSearch}
                                />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <Link to="/cart-product" className="cart">
                                <a className="fa-solid fa-cart-shopping"></a>
                                <span>{cart.length}</span>
                            </Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
