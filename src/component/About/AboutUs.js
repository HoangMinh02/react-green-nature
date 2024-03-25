import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
    return (
        <div className="about-us">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <div className="review">
                            <img src="https://mowgarden.com/wp-content/uploads/2022/01/fence.png" alt="" />
                            <h3>Tạo kết nối</h3>
                            <p>
                                Mối liên kết giữa con người và thiên nhiên là một điều kì diệu của tạo hóa. Khi chúng ta hòa hợp với thiên nhiên thì
                                cuộc sống của trở nên tốt đẹp hơn. Và chúng tôi luôn mong mỏi sẽ có thể tạo ra thật nhiều kết nối này hơn nữa.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className="review">
                            <img src="	https://mowgarden.com/wp-content/uploads/2022/01/gloves.png" alt="" />
                            <h3>Sự chân thành</h3>
                            <p>
                                Và sau khi sự kết nối giữa con người và thiên nhiên được hình thành thì những tác động tích cực từ hoạt động này sẽ
                                bắt đầu diễn ra. Tâm hồn được tác động mạnh mẽ và chúng tôi muốn chia sẽ điều này với sự chân thành.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className="review">
                            <img src="https://mowgarden.com/wp-content/uploads/2022/01/sprout.png" alt="" />
                            <h3>Cùng đồng hành</h3>
                            <p>
                                <strong>Green Nature</strong> không bao giờ muốn dừng lại trên chặng hành trình này. Chúng tôi luôn chủ động thay đổi
                                để không ngừng cải thiện chất lượng dịch vụ. Ngoài ra, chúng tôi cũng luôn đồng hành cùng khách hàng để tạo ra một
                                không gian sống thật sự xứng đáng.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;
