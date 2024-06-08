import Imag11 from "public/assets/UGC-1.jpg";
import Imag12 from "public/assets/UGC-2.jpg";
import Imag13 from "public/assets/UGC-3.jpg";
import Imag14 from "public/assets/UGC-4.jpg";
import React, { Component, createRef, useRef } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import style from "./style.module.css";

const sliderImgSize = {
  width: 380,
  height: 400,
};

export default class Carasol extends Component {
  constructor(props) {
    super(props);
    const ref = createRef();
  }

  render() {
    return (
      <div className="mt-5">
        {/* <h1 className={style.htext}>UGC</h1> */}

        <div className={style.imgcontainer}>
          <h1 className="fs-40 text-center my-5 fw-600">Happy Customers</h1>
          <div className={style.slideContainer} ref={this.ref}>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag11.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag12.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag13.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag14.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag11.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag12.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag13.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag14.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag11.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag12.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag13.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag14.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
