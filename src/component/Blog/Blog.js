import React from "react";
import "./Blog.css";
import blog from "./DataBlog";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className="blog">
            <Container>
                <Row>
                    {blog &&
                        blog.map((item) => (
                            <Col lg={4} md={6} id={item.id} className="mt-3">
                                <Link to={`/detail-blog/${item.id}`}>
                                    <div className="post-blog">
                                        <div className="thumb">
                                            <img src={item.thumb} alt="" />
                                        </div>
                                        <h3>{item.title}</h3>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default Blog;
