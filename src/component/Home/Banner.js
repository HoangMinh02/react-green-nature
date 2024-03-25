import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img src={banner1} alt="" />
                    <div className="content">
                        <Carousel.Caption>
                            <h3>Hãy trân trọng thiên nhiên nơi bạn sống</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={banner2} alt="" />
                    <div className="content">
                        <Carousel.Caption>
                            <h3>Thêm một cái cây, thêm một mầm sống</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={banner3} alt="" />
                    <div className="content">
                        <Carousel.Caption>
                            <h3>Hãy ngắm nhìn thiên nhiên bạn sẽ thấy hình ảnh tâm hồn chính mình</h3>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
