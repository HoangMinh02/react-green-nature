import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import CardProduct from "../CardProduct/CardProduct";
import useFetch from "../../useFetch";
import "./Products.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const listProduct = useFetch("https://65f40b4c105614e654a1c62c.mockapi.io/product");
    const [price, setPrice] = useState();
    const [category, setCategory] = useState(1);
    const [filterPrice, setFilterPrice] = useState({ min: 100000, max: 2000000 });
    const [filterCategory, setFilterCategory] = useState("Tất cả sản phẩm");
    const [filterProduct, setFilterProduct] = useState();
    const [keySearch, setKeySearch] = useState();
    const navigate = useNavigate();
    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            console.log(keySearch);
            navigate(`/search/${keySearch}`);
            setKeySearch("");
        }
    };
    useEffect(() => {
        setFilterProduct(listProduct);
    }, [listProduct]);
    const handleCategory = (category, type) => {
        setCategory(category);
        setFilterCategory(type);
    };
    const handlePrice = (price, min, max) => {
        setPrice(price);
        setFilterPrice({ min, max });
    };
    useEffect(() => {
        const filterProducts = listProduct.filter((item) => {
            if (filterCategory === "Tất cả sản phẩm") {
                return item.price >= filterPrice.min && item.price <= filterPrice.max;
            } else {
                return item.category === filterCategory && item.price >= filterPrice.min && item.price <= filterPrice.max;
            }
        });
        setFilterProduct(filterProducts);
    }, [category, price]);
    return (
        <div className="products">
            <Container>
                <Row>
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
                </Row>
                <Row>
                    <Col md={3}>
                        <div className="categories">
                            <h4>Danh mục</h4>
                            <div className="is-bottom"></div>
                            <ul className="option">
                                <li className={`${category === 1 && "active"}`} onClick={() => handleCategory(1, "Tất cả sản phẩm")}>
                                    Tất cả sản phẩm
                                </li>
                                <li className={`${category === 2 && "active"}`} onClick={() => handleCategory(2, "Cây Trong Nhà")}>
                                    Cây trong nhà
                                </li>
                                <li className={`${category === 3 && "active"}`} onClick={() => handleCategory(3, "Cây Ngoài Trời")}>
                                    Cây ngoài trời
                                </li>
                            </ul>
                        </div>
                        <div className="categories">
                            <h4>Lọc theo giá</h4>
                            <div className="is-bottom"></div>
                            <ul className="option">
                                <li className={`${price === 1 && "active"}`} onClick={() => handlePrice(1, 100000, 200000)}>
                                    100.000 - 200.000
                                </li>
                                <li className={`${price === 2 && "active"}`} onClick={() => handlePrice(2, 200000, 300000)}>
                                    200.000 - 300.000
                                </li>
                                <li className={`${price === 3 && "active"}`} onClick={() => handlePrice(3, 300000, 500000)}>
                                    300.000 - 500.000
                                </li>
                                <li className={`${price === 4 && "active"}`} onClick={() => handlePrice(4, 500000, 2000000)}>
                                    500.000 - 2.000.000
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <h4>{filterCategory}</h4>
                            {filterProduct &&
                                filterProduct.map((item) => (
                                    <Col md={4} sm={4} key={item.id}>
                                        <CardProduct
                                            id={item.id}
                                            thumb={item.thumb}
                                            name={item.name}
                                            price={item.price}
                                            discount={item.discount}
                                            category={item.category}
                                        ></CardProduct>
                                    </Col>
                                ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Products;
