import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import logo from "../../assets/logo.png";

const Contact = () => {
    return (
        <div className="contact">
            <Container>
                <Row>
                    <img
                        className="img-map"
                        src="https://www.google.com/maps/vt/data=o0bCqjTFqz1ONVaJ_KXhzznSKWQ09G0w_H8Tsvvm0NeZCMM0IaDiJmY2qweszeO455EkxuNjyAajLlxRPD0761PH1JPONZ7dGvssUNRMaexhrZ5m1Ssre4XdsCbLR1xhl_zle1io00NiYcVF-TfgXocWZdpAzz2m53MxP-EwMAWGbZxSnsgEY4aWsdDbxhm5S49ta0jpeMkKsx9Z7W6Arub-BOHrgw"
                        alt=""
                    />
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="contact-content">
                            <img src="	https://mowgarden.com/wp-content/uploads/2022/01/call.png" alt="" />
                            <h4>Thông tin liên hệ</h4>
                            <ul>
                                <li>
                                    <span>Địa chỉ vườn: </span> Hồ Chí Minh, Việt Nam
                                </li>
                                <li>
                                    <span>Hotline: </span>0779 767 361
                                </li>
                                <li>
                                    <span>Email: </span>hotro@greennature.com
                                </li>
                                <li>
                                    <span>Mở cửa: </span>8:30 - 18:00
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <h4>Để lại lời nhắn</h4>
                        <div className="name">
                            <input type="text" placeholder="Tên" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <textarea className="mess" type="text" placeholder="Tin nhắn" />
                        <Button> Gửi</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
