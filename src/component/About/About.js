import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import AboutUs from "./AboutUs";

const About = () => {
    return (
        <Container className="pe-3 my-3">
            <div className="about">
                <Row>
                    <Col lg={8} md={12}>
                        <h3>Món quà đến từ thiên nhiên</h3>
                        <p>
                            Mỗi năm cây xanh có thể hấp thụ trung bình được khoảng 21kg khí CO2, nó tương đương với 22 tấn khí carbonic trong suốt
                            cuộc đời của cây. Điều đó nói lên tầm quan trọng của cây xanh đối với môi trường sống của con người. Toàn bộ lượng khí ô
                            nhiễn (các oxit nitơ, amoniac, SO2 và ôzôn) được cây xanh chuyển hóa thành oxi giúp cho con người được thở.
                        </p>
                        <p>
                            Việc kết nối với thường xuyên với thiên nhiên sẽ mang lại nhiều lợi ích lâu dài về mặt tinh thần, sức khỏe và cân bằng.
                            Với đời sống hiện đại thì việc liên kết với thiên nhiên ngày càng ít ỏi. Thiên nhiên có phải là một thứ xa xỉ hay không?
                            Tại sao chúng ta không tạo ra những mảng xanh thư thái ngay trong chính nơi chúng thường sống.{" "}
                        </p>
                        <p>
                            <strong>Green Nature</strong> tin rằng một khi bạn đã đi tìm kiếm mảng xanh cho không gian sống cho mình thì bạn đang cố
                            gắng tạo ra kết nối với chính bản thân mình. Và bạn cũng là một người có ý thức bảo vệ môi trường và giúp mọi người hành
                            động vì mẹ Thiên Nhiên.
                        </p>
                        <p>
                            Tôn chỉ giúp <strong>Green Nature</strong> hoạt động chính là tinh thần trách nhiên với thiên nhiên cũng như mang lại
                            những sản phẩm xanh và tự nhiên tới cộng đồng bằng một dịch vụ chất lượng. Chúng tôi hy vọng rằng mình có thể lan tỏa mạnh
                            mẽ tinh thần liên kết và bảo vệ Mẹ Thiên Nhiên nhiều hơn. Từ đó, cuộc sống loài người sẽ trở nên tốt đẹp hơn từ những nỗ
                            lực bảo vệ này.
                        </p>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className="thumb">
                            <img src="https://mowgarden.com/wp-content/uploads/2021/06/trong-cay-trong-nha.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <AboutUs></AboutUs>
                </Row>
            </div>
        </Container>
    );
};

export default About;
