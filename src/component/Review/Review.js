import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Review.css";
import Slider from "react-slick";

const Review = () => {
    useEffect(() => {
        const handleResize = () => {
            // Cập nhật số lượng slidesToShow và slidesToScroll dựa trên kích thước màn hình
            let slidesToShow = 3;
            let slidesToScroll = 2;
            if (window.innerWidth <= 768) {
                slidesToShow = 2;
                slidesToScroll = 2;
            }
            if (window.innerWidth <= 576) {
                slidesToShow = 1;
                slidesToScroll = 1;
            }
            setSettings({
                ...settings,
                slidesToShow,
                slidesToScroll,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Gọi hàm một lần để cài đặt ban đầu

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures that effect runs only once on mount

    const [settings, setSettings] = useState({
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
    });
    return (
        <Container>
            <Row>
                <h3 className="title-review">Khách Hàng Nói Về Green Nature</h3>
            </Row>
            <Row>
                <Slider {...settings}>
                    <div className="review">
                        <img src="https://mowgarden.com/wp-content/uploads/2022/01/khach-hang-thale-hoahongsaigon1.jpg" alt="" />
                        <h3>Thành Lễ</h3>
                        <p>
                            Mình mua của shop 2 lần rồi, phải nói là rất cây rất đẹp luôn ấy. Nhỏ nhỏ,dễ thương, xanh tốt Đóng gói rất là kĩ càng.
                            Thời gian giao hàng thì rất nhanh. Mình thấy rất yên tâm khi mua cây ở shop Mọi người nên mua nhé
                        </p>
                    </div>
                    <div className="review">
                        <img src="https://mowgarden.com/wp-content/uploads/2022/01/khach-hang-mua-hoahongsaigon-800x800.jpg" alt="" />
                        <h3>Phương Nga</h3>
                        <p>
                            Mua của shop cây nào về cg đẹp á? Giá lại rẻ nữa, đóng gói quá chắc chắn, chuyên nghiệp hihi, sẽ lại mua nếu có tiền, giao
                            hàng siêu nhanh, thích cực
                        </p>
                    </div>
                    <div className="review">
                        <img src="https://9xgarden.com/wp-content/uploads/2020/04/ms-rosie-cp.png" alt="" />
                        <h3>Tường Vy</h3>
                        <p>
                            Chăm được cái cây ưng ghê, hàng cây xanh của bên shop rất đẹp, cây khoẻ nên chăm cũng dễ! Đặc biệt cây không có đất nên
                            rất sạch sẽ. Nói chung cực thích!
                        </p>
                    </div>
                    <div className="review">
                        <img src="https://9xgarden.com/wp-content/uploads/2020/04/thuy-nhung.png" alt="" />
                        <h3>Ly Ly</h3>
                        <p>
                            Mua của shop cây nào về cg đẹp á? Giá lại rẻ nữa, đóng gói quá chắc chắn, chuyên nghiệp hihi, sẽ lại mua nếu có tiền, giao
                            hàng siêu nhanh, thích cực
                        </p>
                    </div>
                </Slider>
            </Row>
        </Container>
    );
};

export default Review;
