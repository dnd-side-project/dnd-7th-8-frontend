import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
// import "./styles.css";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <CarouselConainer>
            <section className="page-carousel">
                <Slider {...settings}>
                    <div>거창한 내용</div>
                    <div>대단한 내용</div>
                    <div>멋있는 내용</div>
                    <div>예쁜 내용</div>
                    <div>무언가 엄청난 내용</div>
                </Slider>
            </section>
        </CarouselConainer>
    );
}

export default Carousel;

const CarouselConainer = styled.div``;
