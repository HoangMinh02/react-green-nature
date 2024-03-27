import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./DetailBlog.css";
import blog from "./DataBlog";

const DetailBlog = () => {
    const { slug: id } = useParams();
    const blogDetail = blog.find((item) => item.id === Number(id));
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/blog");
    };
    return (
        <div className="detail-blog">
            <Container>
                <Row>
                    <i onClick={handleBack} class="fa-solid fa-left-long"></i>
                    <Col lg={8} sm={12}>
                        <div className="title">
                            <h3>{blogDetail.title}</h3>
                            <p>24 - 03 - 2024</p>
                        </div>
                        <img src={blogDetail.thumbDetail} alt="" />
                        <h4>{blogDetail.titleName}</h4>

                        <p>{blogDetail.desc}</p>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className="recent">
                            <h3>Tin tức gần đây</h3>
                            {blog &&
                                blog.map((item) => (
                                    <Link to={`/detail-blog/${item.id}`}>
                                        <div className="list">
                                            <div className="thumb">
                                                <img src={item.thumb} alt="" />
                                            </div>
                                            <div className="title">
                                                <h3>{item.title}</h3>
                                                <p>24 - 03 - 2024</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailBlog;
