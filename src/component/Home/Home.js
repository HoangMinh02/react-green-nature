import React from "react";
import Banner from "./Banner";
import ListProduct from "../ListProduct/ListProduct";
import Reason from "../About/Reason";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ListProduct></ListProduct>
            <Reason></Reason>
            <Review></Review>
        </div>
    );
};

export default Home;
