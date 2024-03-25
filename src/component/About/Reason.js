import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const Reason = () => {
    return (
        <Container>
            <div className="reason">
                <h3 className="title">Lý do chọn MOW Garden?</h3>
                <Row>
                    <Col>
                        <Row>
                            <Col lg={2}>
                                <img src="	https://mowgarden.com/wp-content/uploads/2022/01/soil.png" alt="" />
                            </Col>
                            <Col>
                                <div className="reason-content">
                                    <h3>tuyển chọn</h3>
                                    <p>Mọi cây xanh đều phải được chọn lọc kỹ lưỡng</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg={2}>
                                <img src="	https://mowgarden.com/wp-content/uploads/2021/04/018-watering.png" alt="" />
                            </Col>
                            <Col>
                                <div className="reason-content">
                                    <h3>đa dạng</h3>
                                    <p>Dễ dàng tìm được sản phẩm mà bạn mong muốn</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg={2}>
                                <img src="https://mowgarden.com/wp-content/uploads/2022/01/gardening-1.png" alt="" />
                            </Col>
                            <Col>
                                <div className="reason-content">
                                    <h3>Đồng Hành</h3>
                                    <p>Luôn đồng hành và giúp đỡ bạn về mặt kỹ thuật</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col lg={2}>
                                <img src="https://mowgarden.com/wp-content/uploads/2022/01/gardener.png" alt="" />
                            </Col>
                            <Col>
                                <div className="reason-content">
                                    <h3>Đúng chuẩn</h3>
                                    <p>Sử dụng hình ảnh chụp thực tế giúp dễ hình dung</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg={2}>
                                <img src="https://mowgarden.com/wp-content/uploads/2022/01/gardening-2.png" alt="" />
                            </Col>
                            <Col>
                                <div className="reason-content">
                                    <h3>Tin cậy</h3>
                                    <p>Gửi ảnh thực tế và cụ thể trước khi giao hàng</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg={2}>
                                <img src="	https://mowgarden.com/wp-content/uploads/2021/04/006-turf.png" alt="" />
                            </Col>
                            <Col>
                                <div className="reason-content">
                                    <h3>Cạnh tranh</h3>
                                    <p>Tối ưu hóa ngân sách nhờ mức giá cực kì cạnh tranh</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Reason;
