import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";
import useFetch from "../../useFetch";

const Search = () => {
    const { slug: keySearch } = useParams();
    const listProduct = useFetch("https://65f40b4c105614e654a1c62c.mockapi.io/product");
    function removeVietnameseDiacritics(text) {
        // Chuyển đổi các ký tự có dấu thành không dấu
        text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Loại bỏ các ký tự không phải là chữ cái hoặc số
        text = text.replace(/[^\w\s]/g, "");
        return text;
    }
    const findKeySearch = removeVietnameseDiacritics(keySearch.toLowerCase());
    const filterProduct = listProduct.filter((item) => removeVietnameseDiacritics(item.name.toLowerCase()).includes(findKeySearch));
    return (
        <div className="list-search">
            <Container>
                <div className="title">
                    <h4>Kết quả: {keySearch}</h4>
                </div>
                <Row>
                    {filterProduct &&
                        filterProduct.map((item) => {
                            if (keySearch) {
                                return (
                                    <Col md={4} key={item.id}>
                                        <CardProduct
                                            key={item.id}
                                            id={item.id}
                                            thumb={item.thumb}
                                            name={item.name}
                                            price={item.price}
                                            discount={item.discount}
                                            category={item.category}
                                        ></CardProduct>
                                    </Col>
                                );
                            }
                        })}
                </Row>
            </Container>
        </div>
    );
};

export default Search;
