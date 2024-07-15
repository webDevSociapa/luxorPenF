import Imag1 from "public/assets/Happy Customer/Luxor Happy Customer 1.JPG";
import Imag2 from "public/assets/Happy Customer/Luxor Happy Customer 2.JPG";
import Imag3 from "public/assets/Happy Customer/Luxor Happy Customer 3.jpg";
import Imag4 from "public/assets/Happy Customer/Luxor Happy Customer 4.jpg";
import Imag5 from "public/assets/Happy Customer/Luxor Happy Customer 5.JPG";
import Imag6 from "public/assets/Happy Customer/Luxor Happy Customer 6.jpg";
import Imag7 from "public/assets/Happy Customer/Luxor Happy Customer 7.jpg";
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
      <div className="mt-1">
        {/* <h1 className={style.htext}>UGC</h1> */}

        <div className={style.imgcontainer}>
          <h1 className="fs-40 text-center my-5 fw-600">Happy Customers</h1>
          <div className={style.slideContainer} ref={this.ref}>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag1.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag2.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag3.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag4.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag5.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag6.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={Imag7.src}
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
