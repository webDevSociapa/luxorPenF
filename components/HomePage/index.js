import Image from "next/image";
// import styles from '../styles/Home.module.css'
import Ugcslider from "components/Ugcslider";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import pcw from "public/assets/new_launches/PCW.jpg";
import kids from "public/assets/new_launches/kids.png";
import nl_green from "public/assets/new_launches/li_green.png";
import carnivalnew from "public/assets/new_launches/carnivalnew.png"
import revamped from "public/assets/images/Overview/about-us-revamped.png";
import neronew from "public/assets/new_launches/neronew.png"
import vistanew from "public/assets/new_launches/vistanew.png"
import AneliaBlack from "public/assets/new_launches/AneliaBlack.png"
import marker_blue from "public/assets/new_launches/marker_blue.png";
import OutlineMarkerPurple from "public/assets/new_launches/Outline-Marker-Purple.png";
// import OutlineMarkerPurple from "public/assets/new_launches/Outline-Marker-Purple.png";
// import OutlineMarkerPurple from "public/assets/new_launches/Outline-Marker-Purple.png";
// import OutlineMarkerPurple from "public/assets/new_launches/Outline-Marker-Purple.png";
// import OutlineMarkerPurple from "public/assets/new_launches/Outline-Marker-Purple.png";
import BroadtipMarker from "public/assets/new_launches/Broadtip Marker.png";
import Fineliner from "public/assets/new_launches/Fineliner.png";
import TwinFineWriterpastel from "public/assets/new_launches/Twin Fine Writer pastel.png";
import Iconic_clip from "public/assets/new_launches/Iconic Pclip.png";

import Elan from "public/assets/new_launches/Elan.png";
import Fluorescent from "public/assets/new_launches/Fluorescent.png";
import WBM_120 from "public/assets/new_launches/WBM 120 Red.png";
import Pastel from "public/assets/new_launches/Pastel.png";
import metal_pens from "public/assets/new_launches/metal_pens.png";
import pm_blue_last from "public/assets/new_launches/pm_blue_last.png";
import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// import { TweenMax, Power3 } from 'gsap';
import { gsap } from "gsap";
// import Image from 'public/assets/homeBanner.jpg'

import Carasol from "components/carasoul";
import ReuseImage from "public/assets/env_1.gif";
import ReuseImage1 from "public/assets/High_Quality.png";
import ReuseImage2 from "public/assets/Eco_Friendly.png";
import ReuseImage3 from "public/assets/Smooth.png";
import ReuseImage4 from "public/assets/100_Quality.png";
import ReuseImage5 from "public/assets/100_Quality.png";
import ReuseImage6 from "public/assets/3r.png";
import worldMap from "public/assets/map.png";
import style from "./style.module.css";
// import ArtGallery from "public/assets/images/Art Gallery.jpg";
import { useRouter } from "next/router";
import Image23 from "public/assets/award1.png";
import Image24 from "public/assets/award2.png";
import Image25 from "public/assets/award3.png";
import Ap from "public/assets/images/certificates/Ap.jpg";
import Ce from "public/assets/images/certificates/Ce.jpg";
import Eco from "public/assets/images/certificates/Eco.jpg";
import EN71 from "public/assets/images/certificates/EN71.jpg";
import ISo9001 from "public/assets/images/certificates/ISo9001.jpg";
import ISO14001 from "public/assets/images/certificates/ISO14001.jpg";
import OHS from "public/assets/images/certificates/OHS.jpg";
import ORK from "public/assets/images/certificates/ORK.jpg";
import Reach from "public/assets/images/certificates/Reach.jpg";
import Recycled from "public/assets/images/certificates/Recycled.jpg";
import Tpat from "public/assets/images/certificates/Tpat.jpg";
import I1 from "public/assets/images/Look_Book_Section_1.jpg";
import I2 from "public/assets/images/Look_Book_Section_2.jpg";
import I3 from "public/assets/images/Look_Book_Section_3.jpg";
import Image18 from "public/assets/images/Partner.png";
// import Slider from "@mui/material/Slider";
import WhatPeopleSayCarosel from "@components/WhatPeopleSay";
import WomanLed from "@components/WomanLed";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Modal from "../Model";
import NewCarasol from "components/NewCarasol";
gsap.registerPlugin(ScrollTrigger);

const aboutLuxor = [
  {
    comment:
      "With 20 fit and dexterous pens ready and raring to work in your favor impelling you into writing magical albeit gelled ink-less lines on page after treasured page in an increasingly digital-writing driven world, what more can you ask for?",
    name: "John",
    designation: "Director, GH Coms",
  },
  {
    comment:
      "With 20 fit and dexterous pens ready and raring to work in your favor impelling you into writing magical albeit gelled ink-less lines on page after treasured page in an increasingly digital-writing driven world, what more can you ask for?",
    name: "Ritik",
    designation: "Director, GH Coms",
  },
  {
    comment:
      "With 20 fit and dexterous pens ready and raring to work in your favor impelling you into writing magical albeit gelled ink-less lines on page after treasured page in an increasingly digital-writing driven world, what more can you ask for?",
    name: "Sachin",
    designation: "Director, GH Coms",
  },
  {
    comment:
      "With 20 fit and dexterous pens ready and raring to work in your favor impelling you into writing magical albeit gelled ink-less lines on page after treasured page in an increasingly digital-writing driven world, what more can you ask for?",
    name: "Amit",
    designation: "Director, GH Coms",
  },
];

function App(props) {
  const [scrollX, setScrollX] = useState(0);
  const carouselRef = useRef(null);

  const [productScrollX, setProductScrollX] = useState(0);
  const productCarouselRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },

      // Add more breakpoints as needed
    ],
  };

  const [all_prdcts, set_all_prdcts] = useState(props.all_prdcts);
  console.log("all_prdcts", all_prdcts);
  let router = useRouter();
  let prd_pen = useRef();

  const [gallery, setGallery] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let text_div = document.querySelectorAll(".home-text");
    let sections = document.querySelectorAll(".home1-img");
    let new_launch = document.querySelectorAll("new_launch");

    /*  gsap.to(sections, {
       duration: 2,
       x: -80,
       repeat: -1,
       yoyo: true,
       scrollTrigger: {
         trigger: sections,
         toggleActions: "restart pause resume reset",
         onToggle: (self) => console.log("toggled, isActive:", self.isActive),
         start: "top 70%",
         end: "bottom 50%",
       },
     }); */

    /*   gsap.from(text_div, {
        x: -150,
        stagger: 0.2, // 0.1 seconds between when each ".box" element starts animating
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: text_div,
          toggleActions: "restart pause resume reset",
          onToggle: (self) => console.log("toggled, isActive:", self.isActive),
          start: "top 50%",
          end: "bottom 50%",
        },
      }); */

    /*    gsap.to(text_div, {
         x: 70,
         opacity: 1,
         duration: 2,
         repeat: -1,
         yoyo: true,
         scrollTrigger: {
           trigger: text_div,
           toggleActions: "restart pause resume reset",
           onToggle: (self) => console.log("toggled, isActive:", self.isActive),
           start: "top 50%",
           end: "bottom 50%",
         },
       }); */

    // productBackGround();
    newLaumch();
  }, []);

  function productBackGround() {
    let prd_bc = document.querySelectorAll(".prd_box");
    let tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: prd_bc,
        toggleActions: "restart pause resume reset",
        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    tl.to(prd_bc, {
      duration: 1,
      opacity: 1,
      ease: "expo.inOut",
    });

    tl.from(
      prd_bc,
      {
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.inOut",
      },
      "-=0.5"
    );

    tl.reverse();

    // tl.from(links, {
    //   duration: 1,
    //   opacity: 0,
    //   y: 20,
    //   stagger: 0.1,
    //   ease: 'expo.inOut',
    // }, "-=0.5");

    // tl.reverse();

    // ham.addEventListener('click', () => {
    //   tl.reversed(!tl.reversed());
    // });

    // gsap.to(prd_bc ,
    //      {
    //                 x:-220 ,
    //             duration:2,
    //             width:0,
    //             opacity:5,
    //      } ,

    //       {
    //         x:200,

    //      opacity: 1,
    //     duration:2,
    //     scrollTrigger: {
    //         trigger: prd_bc,
    //         toggleActions:"restart pause resume reset",
    //         onToggle: self => console.log("toggled, isActive:", self.isActive),
    //         start: "top 70%",
    //         end: "top 30%",
    //         markers:true
    //       },

    //    })
  }

  const scrollLeft = () => {
    console.log("carouselRef.current", carouselRef.current, scrollX);
    if (carouselRef.current && scrollX > 0) {
      const newScrollX = scrollX - 200; // Adjust the scroll amount as needed
      setScrollX(newScrollX);
      carouselRef.current.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && scrollX < 100000) {
      const newScrollX = scrollX + 550; // Adjust the scroll amount as needed
      setScrollX(newScrollX);
      carouselRef.current.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
    }
  };

  const productScrollLeft = () => {
    if (productCarouselRef.current && productScrollX > 0) {
      const newScrollX = productScrollX - 380; // Adjust the scroll amount as needed
      setProductScrollX(newScrollX);
      productCarouselRef.current.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
    }
  };

  const productScrollRight = () => {
    if (productCarouselRef.current && productScrollX < 1900) {
      const newScrollX = productScrollX + 380; // Adjust the scroll amount as needed
      setProductScrollX(newScrollX);
      productCarouselRef.current.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
    }
  };

  function newLaumch() {
    let new_launch = document.querySelectorAll(".new_launch");
    let pen_marker_line = document.querySelectorAll(".pen_marker_line");

    let marker_marks = document.querySelectorAll(".new_launch_marker img");

    gsap.to(marker_marks, {
      duration: 2,
      x: 400,
      scrollTrigger: {
        trigger: marker_marks,
        toggleActions: "restart pause resume reset",
        onToggle: (self) => console.log("toggled, isActive:", self.isActive),
        start: "top 70%",
        end: "bottom 20%",
      },
    });

    gsap.fromTo(
      pen_marker_line,
      {
        duration: 2,
        width: 0,
        opacity: 5,
      },

      {
        duration: 2,
        width: 400,
        height: "100%",
        opacity: 0,
        borderRadius: "0 0 50% 50% ",
        height: "fit-content",
        backgroundColor: "rgba(99, 97, 7, 0.8)",
        zIndex: -2,
        scrollTrigger: {
          trigger: pen_marker_line,
          toggleActions: "restart pause resume restart",

          onToggle: (self) => console.log("toggled, isActive:", self.isActive),
          start: "top 70%",
          end: "bottom 50%",
        },
      }
    );
  }

  function drawPen(pen_div, pen_image_div, pen_draw_div, pen_colour, card_div, size_div) {
    let penDiv = document.querySelectorAll(pen_div);
    let Image = document.querySelectorAll(pen_image_div);
    let marker_line = document.querySelectorAll(pen_draw_div);
    let card = document.querySelectorAll(card_div);

    gsap.to(penDiv, {
      //  backgroundColor:"red",
      // width: 300,
      // scale: 1,
      // dirat1ion: 2,
      translateY: -40,
      duration: 2,
    });

    gsap.to(card, {
      backgroundColor: "#da3131",
    });

    gsap.to(Image, {
      //  backgroundColor:"red",
      x: 100,
      // width: 300,
      // height: "86%",
      scale: 1,
      // dirat1ion: 2,
      duration: 2,
    });

    gsap.to(marker_line, {
      //  backgroundColor:"red",
      borderTop: `${size_div} solid ${pen_colour}`,
      width: 100,
      scale: 1,
      // dirat1ion: 2,
      duration: 2,
    });
  }

  function removeDrawPen(
    pen_div,
    pen_image_div,
    pen_draw_div,
    pen_colour,
    card_div,
    size_div
  ) {
    let penDiv = document.querySelectorAll(pen_div);
    let Image = document.querySelectorAll(pen_image_div);
    let marker_line = document.querySelectorAll(pen_draw_div);
    let card = document.querySelectorAll(card_div);

    gsap.to(penDiv, {
      // backgroundColor: "white",
      // scale: 1,
      translateY: 0,
      duration: 2,
      // width: 245,
    });

    gsap.to(card, {
      backgroundColor: "#ececec",
    });

    gsap.to(Image, {
      //  backgroundColor:"red",
      x: 0,
      // width: 245,
      // height: "86%",
      scale: 1,
      duration: 2,
      yoyo: true,
    });

    gsap.to(marker_line, {
      //  backgroundColor:"red",
      borderTop: `${size_div} solid ${pen_colour}`,
      x: 0,
      width: 0,
      scale: 1,
      duration: 2,
    });
  }

  function visibleProduct(cl_name, prd_image, current_div_class) {
    let prd_img_hover = document.querySelectorAll(cl_name);

    gsap.to(prd_image, {
      zIndex: 20,
      opacity: 1,
      scale: 1,
      duration: 2,
      display: "flex",
      top: "100%",
    });

    gsap.to(`${prd_image} img`, {
      scale: 1,
      scale: 1,
      height: "90px",
      width: "100%",
    });
  }

  function HiddenVisibleProduct(cl_name, prd_image, current_div_class) {
    let prd_img_hover = document.querySelectorAll(cl_name);

    gsap.to(prd_image, {
      scale: 1,
      duration: 2,
      opacity: 0,
      top: "50%",
      display: "none",
    });
  }

  return (
    <>
      <Carasol />

      <section className="py-5 overflow-hidden main_homepage">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="row mt-4"
          >
            <div className="col-md-6 mb-3 wow animate__fadeInLeft animate__animated home-text">
              <div className="home-text-head">
                {/* <h1>Experience </h1>
                <h1>the timeless </h1> */}
                <h1><b>Legacy of Luxor</b></h1>
                {/* <h1>Luxor</h1> */}
              </div>
              <div className="home-text-patra">
                <p>
                  Luxor is a pioneer and a brand leader in the writing
                  instrument industry with a significant presence in the
                  international market. Luxor is exporting products to more than
                  106 countries across the globe including USA, Australia,
                  Russia, UK, Europe, UAE and many other markets. Our range of
                  products include - Kids Markers, Highlighters  sustainable
                  Stationeries, once & Personal Stationery.
                </p>
              </div>

              <div>
                <a href="/overview" className="btn-bg">
                  Explore
                </a>
              </div>
            </div>
            <div className="col-md-6 home1-img wow animate__fadeInRight animate__animated  ">
              <Image src={worldMap} className="img-fluid ms-md-5" alt="Map" />
            </div>
          </div>
        </div>
      </section>
      <section className="launch">
        <div className="heading">
          <div
            style={{
              display: "flex",
              width: "100vw",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <span
              className="new_launch_marker"
              style={{
                position: "relative",
                width: "100px",
                zIndex: "1",
              }}
            >
              <div className="pen_marker_line"></div>
            </span> */}

            <h3 className="fs-50 fw-700 text_black">New Launches</h3>
          </div>
        </div>

        <button
          onClick={scrollLeft}
          className="homepage-new-launches-carousel new-launches-left-arrow"
        >
          {"<"}
        </button>
        <div className="carouselItem" ref={carouselRef}>
          {/* <div
            className="posterBlock1"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock1",
                ".posterBlock1 img",
                ".marker_line1",
                "red"
              )
            }
            
            ={() =>
              removeDrawPen(
                ".posterBlock1",
                ".posterBlock1 img",
                ".marker_line1",
                "white"
              )
            }
          >
            <LazyLoadImage
              src={nl_black.src}
              id="img1"
              alt="Image Alt"
              width={245}
              height={"80%"}
            />
            <Image height={1000} width={1000} src="https://luxorpen.com/images/bp/xonox-bp/black-m.jpg" />
            <div className="textBlock pt-3">
              <div className="marker_line1"> </div>
              <span className="title">Ball / Gell Pens</span>
            </div>
          </div> */}

          <div
            className="posterBlock2"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock2",
                ".posterBlock2 img",
                ".marker_line2",
                "green",
                ".posterBlock2-card",
                "6px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock2",
                ".posterBlock2 img",
                ".marker_line2",
                "white",
                ".posterBlock2-card",
                "6px"
              )
            }
          >
            <div
              className="posterBlock2-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={245}
                height={"80%"}
                id="img2"
                alt="Image Alt"
                src={nl_green.src}
              />

              <div className="marker_line2" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>

            <div className="textBlock pt-3">
              <span className="title">Highliter</span>
            </div>
          </div>
          <div
            className="posterBlock3"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock3",
                ".posterBlock3 img",
                ".marker_line3",
                "blue",
                ".posterBlock3-card",
                "6px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock3",
                ".posterBlock3 img",
                ".marker_line3",
                "white",
                ".posterBlock3-card",
                "6px"
              )
            }
          >
            <div
              className="posterBlock3-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={245}
                height={"80%"}
                alt="homepage"
                src={marker_blue.src}
              />
              <div className="marker_line3" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">White Board Marker 450</span>
            </div>
          </div>
          {/* <div
            className="posterBlock4"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock4",
                ".posterBlock4 img",
                ".marker_line4",
                "black",
                ".posterBlock4-card",
                "6px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock4",
                ".posterBlock4 img",
                ".marker_line4",
                "white",
                ".posterBlock4-card",
                "6px"
              )
            }
          >
            <div
              className="posterBlock4-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={237}
                height={"80%"}
                alt="homepage"
                src={pm_blue_last.src}
              />
              <div className="marker_line4" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Permanent Marker 1222</span>
            </div>
          </div> */}
          <div
            className="posterBlock6"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock6",
                ".posterBlock6 img",
                ".marker_line6",
                "black",
                ".posterBlock6-card",
                "5px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock6",
                ".posterBlock6 img",
                ".marker_line6",
                "white",
                ".posterBlock6-card",
                "5px"
              )
            }
          >
            <div
              className="posterBlock6-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={230}
                height={"80%"}
                alt="homepage"
                src={pcw.src}

              />
              <div className="marker_line6" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Fine Point Permanent Markers</span>
            </div>
          </div>
          <div
            className="posterBlock5"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock5",
                ".posterBlock5 img",
                ".marker_line5",
                "black",
                ".posterBlock5-card",
                "1.5px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock5",
                ".posterBlock5 img",
                ".marker_line5",
                "white",
                ".posterBlock5-card",
                "1.5px"
              )
            }
          >
            <div
              className="posterBlock5-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={237}
                height={"80%"}
                alt="homepage"
                src={metal_pens.src}
              />
              <div className="marker_line5" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Dunes Set</span>
            </div>
          </div>
          <div
            className="posterBlock7"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock7",
                ".posterBlock7 img",
                ".marker_line7",
                "black",
                ".posterBlock7-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock7",
                ".posterBlock7 img",
                ".marker_line7",
                "white",
                ".posterBlock7-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock7-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={kids.src}
              />
              <div className="marker_line7" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Luxor Felt Tip Colouring</span>
            </div>
          </div>
          <div
            className="posterBlock8"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock8",
                ".posterBlock8 img",
                ".marker_line8",
                "black",
                ".posterBlock8-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock8",
                ".posterBlock8 img",
                ".marker_line8",
                "white",
                ".posterBlock8-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock8-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={carnivalnew.src}
              />
              <div className="marker_line8" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Carnival</span>
            </div>
          </div>
          <div
            className="posterBlock9"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock9",
                ".posterBlock9 img",
                ".marker_line9",
                "black",
                ".posterBlock9-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock9",
                ".posterBlock9 img",
                ".marker_line9",
                "white",
                ".posterBlock9-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock9-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={neronew.src}
              />
              <div className="marker_line9" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Nero</span>
            </div>
          </div>
          <div
            className="posterBlock10"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock10",
                ".posterBlock10 img",
                ".marker_line10",
                "black",
                ".posterBlock10-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock10",
                ".posterBlock10 img",
                ".marker_line10",
                "white",
                ".posterBlock10-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock10-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={vistanew.src}
              />
              <div className="marker_line10" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Vista</span>
            </div>
          </div>
          <div
            className="posterBlock11"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock11",
                ".posterBlock11 img",
                ".marker_line11",
                "black",
                ".posterBlock11-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock11",
                ".posterBlock11 img",
                ".marker_line11",
                "white",
                ".posterBlock11-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock11-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={AneliaBlack.src}
              />
              <div className="marker_line11" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Anelia Black</span>
            </div>
          </div>
          <div
            className="posterBlock12"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock12",
                ".posterBlock12 img",
                ".marker_line12",
                "black",
                ".posterBlock12-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock12",
                ".posterBlock12 img",
                ".marker_line12",
                "white",
                ".posterBlock12-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock12-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Elan.src}
              />
              <div className="marker_line12" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Elan</span>
            </div>
          </div>
          <div
            className="posterBlock13"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock13",
                ".posterBlock13 img",
                ".marker_line13",
                "black",
                ".posterBlock13-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock13",
                ".posterBlock13 img",
                ".marker_line13",
                "white",
                ".posterBlock13-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock13-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Fluorescent.src}
              />
              <div className="marker_line13" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Highlighter Fluorescent Neo</span>
            </div>
          </div>
          <div
            className="posterBlock14"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock14",
                ".posterBlock14 img",
                ".marker_line14",
                "black",
                ".posterBlock14-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock14",
                ".posterBlock14 img",
                ".marker_line14",
                "white",
                ".posterBlock14-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock14-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Pastel.src}
              />
              <div className="marker_line14" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Highlighter Pastel Neo</span>
            </div>
          </div>
          <div
            className="posterBlock15"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock15",
                ".posterBlock15 img",
                ".marker_line15",
                "black",
                ".posterBlock15-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock15",
                ".posterBlock15 img",
                ".marker_line15",
                "white",
                ".posterBlock15-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock15-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={WBM_120.src}
              />
              <div className="marker_line15" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Whiteboard Marker 120 Neo</span>
            </div>
          </div>
          <div
            className="posterBlock16"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock16",
                ".posterBlock16 img",
                ".marker_line16",
                "black",
                ".posterBlock16-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock16",
                ".posterBlock16 img",
                ".marker_line16",
                "white",
                ".posterBlock16-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock16-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={OutlineMarkerPurple.src}
              />
              <div className="marker_line16" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Outline Marker</span>
            </div>
          </div>
          <div
            className="posterBlock21"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock21",
                ".posterBlock21 img",
                ".marker_line21",
                "black",
                ".posterBlock21-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock21",
                ".posterBlock21 img",
                ".marker_line21",
                "white",
                ".posterBlock21-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock21-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={BroadtipMarker.src}
              />
              <div className="marker_line21" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Broadtip Marker</span>
            </div>
          </div>
          <div
            className="posterBlock20"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock20",
                ".posterBlock20 img",
                ".marker_line20",
                "black",
                ".posterBlock20-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock20",
                ".posterBlock20 img",
                ".marker_line20",
                "white",
                ".posterBlock20-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock20-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Fineliner.src}
              />
              <div className="marker_line20" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Fineliner</span>
            </div>
          </div>
          {/* <div
            className="posterBlock18"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock18",
                ".posterBlock18 img",
                ".marker_line18",
                "black",
                ".posterBlock18-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock18",
                ".posterBlock18 img",
                ".marker_line18",
                "white",
                ".posterBlock18-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock18-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={TwinFineWriterpastel.src}
              />
              <div className="marker_line18" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Dual Writer Pastel</span>
            </div>
          </div> */}
          {/* <div
            className="posterBlock17"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock17",
                ".posterBlock17 img",
                ".marker_line17",
                "black",
                ".posterBlock17-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock17",
                ".posterBlock17 img",
                ".marker_line17",
                "white",
                ".posterBlock17-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock17-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Iconic_clip.src}
              />
              <div className="marker_line17" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Iconic Fine Neo</span>
            </div>
          </div> */}

        </div>
        <button
          onClick={scrollRight}
          className="homepage-new-launches-carousel new-launches-right-arrow"
        >
          {">"}
        </button>
      </section>

      <section>
        <div className="products mt-5">
          <div className="prodBackground">
            <div className="">
              <h2 className="fs-50 fw-600 text-center mt-4 mt-md-2 text-white pb-2">
                World of Luxor
              </h2>
            </div>
          </div>

          {/* <div className="product-container">
             

             <div className="prd_container"  >
                {all_prdcts.length>0 && all_prdcts.map(ele =>{
                    return <React.Fragment>
                    <div className ="product-box  prd_card " onClick={()=> router.push("product/"+ele._id ) } >
                    <h3>{ ele._doc?ele._doc.name:ele.name }</h3>
                    <div className="product-img" >
                        <Image  src={Image1} alt={ele.name} />
                    </div>

                </div>

                    </React.Fragment>
                    })}
            </div>


              

          </div> */}

          <section className="py-5">
            <div className="products_list">
              <button
                className="product-carousel-btn product-carousel-left"
                onClick={productScrollLeft}
              >
                {"<"}
              </button>
              <div
                className="row flex-nowrap overflow-auto px-4 products-cont"
                ref={productCarouselRef}
              >
                {all_prdcts.length > 0 &&
                  all_prdcts.map((ele) => {
                    let image_file = ele._doc
                      ? process.env.NEXT_PUBLIC_BASE_URL +
                      "/" +
                      ele._doc.master_folder_name +
                      "/" +
                      ele._doc.file_name
                      : process.env.NEXT_PUBLIC_BASE_URL +
                      "/" +
                      ele.master_folder_name +
                      "/" +
                      ele.file_name;
                    return (
                      <React.Fragment>
                        <div
                          className="col-12 col-sm-6 mt-4 mt-md-0 col-md-4 col-lg-3 mb-3 prd_box"
                          onClick={() =>
                            router.push("listing/" + ele.name + "/" + ele._id)
                          }
                        >
                          <div className="card h-100 rounded-0 shadow-sm border-0 cards_hover">
                            {/* <div className="card-body px-0 pb-0">
                              <h3 className="fs-20 text-center">
                                {ele._doc ? ele._doc.name : ele.name}
                              </h3> */}
                            {/* <div className=""> */}
                            <Image
                              className="mb-0"
                              src={image_file}
                              // width={500}
                              width={400}
                              height={400}
                              alt={ele.name}
                              objectFit="fill"
                            />
                            {/* </div> */}
                            {/* </div> */}
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </div>
              <button
                className="product-carousel-btn product-carousel-right"
                onClick={productScrollRight}
              >
                {">"}
              </button>
            </div>
          </section>

          {/* <div className="product-btn">
            <a href="#" className="btn-box">
              All Products
            </a>
          </div> */}
        </div>
      </section>

      <section className="">
        <div className="container-fluid p-0 vid-section">
          {/* <h2
          className="fs-40 text-center my-3 fw-600 pb-2"
        >
          Creating Impressions Worldwide
        </h2> */}
          <div className="container">
            <div className="partner-cont">
              <Image src={revamped} alt="homepage" />
            </div>
          </div>
          <div className="mt-1">
            {/*            <Image
              style={{ width: "100", height: "100" }}
              className=" img-fluid h-100"
              src={Image4}
              alt="Map"
        /> */}

            {/* <ImageMap2 /> */}
            <video
              autoPlay={true}
              muted
              className={style["video-img1"]}
              loop
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/final_map_export_aeroplane.mp4`}
            />
          </div>
        </div>
      </section>

      <section className="py-5 pt-1">
        <div className="container-fluid p-0 vid-section">
          <h2 className="fs-50 text-center my-5 fw-600">Our Journey</h2>
          <NewCarasol />
          {/* <div className="mt-5"> */}
            {/*          <Image
            className="img-fluid w-100"
            src={Image5}
            alt="Luxor Journey"
            /> */}
            {/* <video
              autoPlay={true}
              muted
              className={style["video-img"]}
              // style={{ objectFit: "contain" }}
              loop
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/2023_our_journey_full.mp4`}
            /> */}
            {/* <JourneyMap /> */}
            {/* <ImageMap /> */}
          {/* </div> */}

        </div>
      </section>

      <section className="py-2 pt-1">
        <div className="container">
          <h2 className="fs-50 fw-600 text-center my-5 text_green">
            Let's save the <br /> environment with Luxor
          </h2>

          <p className="text_grey  fs-20 text_justify">
            Evolution of humans has done nothing but harm to our planet, the
            number of non-biodegradable dumps we have made is turning our planet
            hostile and non-biodegradable & plastic products are the prime
            reasons behind our planet's vulnerability. Acknowledging the harm we
            have caused to our planet has made everyone quite aware & active
            about following ways to endure a life without causing loss to our
            surroundings and therefore the demand for eco-friendly products is
            on rise, especially in the international market.
            <br />
            Luxor International takes a step ahead with an e‘ort & aim to help
            our planet breathe well, by adding stationeries that are made of
            recycled materials to our range of drawing and writing instruments
          </p>
          {/* <div className="imageContainer">

            <span data-wow-delay="0.2s" className="wow animate__fadeInLeft animate__animated"><Image className=" img-fluid reuse-image" src={ReuseImage1} alt="Re Use" /></span>
            <span data-wow-delay="0.5s" className=" wow animate__fadeInBottomLeft animate__animated"><Image className=" img-fluid reuse-image w-80" src={ReuseImage2} alt="Re Use" /></span>
            <span data-wow-delay="0.7s" className=" wow animate__fadeInUp animate__animated"><Image className="  img-fluid reuse-image w-80" src={ReuseImage3} alt="Re Use" /></span>
            <span className=" wow animate__zoomIn animate__animated"><Image className=" img-fluid reuse-image w-80" src={ReuseImage} alt="Re Use" /></span>
            <span data-wow-delay="0.9s" className=" wow animate__fadeInUp animate__animated"><Image className=" img-fluid reuse-image w-80" src={ReuseImage4} alt="Re Use" /></span>
            <span data-wow-delay="1s" className=" wow animate__fadeInBottomRight animate__animated"><Image className="  img-fluid reuse-image w-80" src={ReuseImage5} alt="Re Use" /></span>
            <span data-wow-delay="1.2s" className=" wow animate__fadeInRight animate__animated"><Image className=" img-fluid reuse-image w-80" src={ReuseImage6} alt="Re Use" /></span>

          </div> */}
          <div className="d-flex mt-2 justify-content-between">
            <div className="align-self-end w_20" style={{ width: "18%" }}>
              <span
                data-wow-delay="0.2s"
                className="wow  animate__fadeInLeft  animate__animated"
              >
                <Image className=" img-fluid" src={ReuseImage1} alt="Re Use" />
              </span>
            </div>
            <span className="wow animate__zoomIn animate__animated" style={{ width: "25%" }}>
              <Image
                className=" img-fluid reuse-image "
                src={ReuseImage}
                alt="Re Use"
              />
            </span>
            <div className="align-self-end w_20" style={{ width: "18%" }}>
              <span
                data-wow-delay="1.2s"
                className=" wow animate__fadeInRight animate__animated"
              >
                <Image className=" img-fluid " src={ReuseImage6} alt="Re Use" />
              </span>
            </div>
          </div>
          <div className="d-flex mt-0 gap-5 justify-content-between">
            <div style={{ marginLeft: "16%", width: "18%" }} className="w_20">
              <span
                data-wow-delay="0.5s"
                className=" wow animate__fadeInBottomLeft animate__animated"
              >
                <Image
                  className=" img-fluid reuse-image"
                  src={ReuseImage2}
                  alt="Re Use"
                />
              </span>
            </div>
            <div style={{ marginRight: "16%", width: "18%" }} className="w_20">
              <span
                data-wow-delay="1s"
                className=" wow animate__fadeInBottomRight animate__animated"
              >
                <Image
                  className="  img-fluid reuse-image"
                  src={ReuseImage5}
                  alt="Re Use"
                />
              </span>
            </div>
          </div>
          <div className="d-flex mt-0 gap-5 justify-content-center">
            <div className="w_20" style={{ width: "18%" }}>
              <span
                data-wow-delay="0.7s"
                className=" wow animate__fadeInUp animate__animated"
              >
                <Image
                  className="  img-fluid reuse-image"
                  src={ReuseImage3}
                  alt="Re Use"
                />
              </span>
            </div>
            <div className="w_20" style={{ width: "18%" }}>
              <span
                data-wow-delay="0.9s"
                className=" wow animate__fadeInUp animate__animated"
              >
                <Image
                  className=" img-fluid reuse-image"
                  src={ReuseImage4}
                  alt="Re Use"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-5 position-relative">
        <div className="container-fluid p-0">
          <Image className="img-fluid" src={ArtGallery} alt="Art Gallery" />
          <button className="btn Art_gallery_button text-white fs-16">
            Art Gallery
          </button>
        </div>
      </section> */}

      {/* ======== */}
      <section className="py-5 position-relative">
        <div
          style={{ width: "100vw", height: "600px" }}
          className="artGallery-img"
        >
          <div className={`side-gallery ${gallery ? "full" : ""}`}>
            <div
              onClick={() => {
                gallery ? setGallery(false) : setGallery(true);
              }}
              className={`side-curve-left`}
            >
              <div style={{ marginRight: '-45%' }} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="25"
                  fill="#fff"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                // onClick={pauseAllIframeVideos()}
                >
                  {gallery ? <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  /> :
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                  }</svg>
              </div>
            </div>
            {gallery ? <div
              className="container-fluid p-0"
              style={{ position: "relative", left: "88px" }}
            >
              <div className={gallery ? "row flex-nowrap overflow-auto" : "row overflow-auto"}>
                <div className="col-md-4  ">
                  <iframe
                    width="100%"
                    className="rounded"
                    height="300px"
                    src="https://www.youtube.com/embed/Sla-7sRFFPg?si=hrKgVQH8OzV7WHo6"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-md-4  ">
                  <iframe
                    width="100%"
                    className="rounded"
                    height="300px"
                    src="https://www.youtube.com/embed/wUmn96nAnkU?si=wVOywI9lRN4zxBPt"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-md-4  ">
                  <iframe
                    width="100%"
                    className="rounded"
                    height="300px"
                    src="https://www.youtube.com/embed/zLN-B8qg7FA?si=hMTxOu9OfLgRzded"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* <div className="col-md-4  ">
                  <iframe
                    width="100%"
                    className="rounded"
                    height="300px"
                    src="https://www.instagram.com/reel/C6LnjpPsrEU/?igsh=MTMydGR4NjU1NmxhYg=="
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-md-4  ">
                  <iframe
                    width="100%"
                    className="rounded"
                    height="300px"
                    src="https://www.instagram.com/reel/C6OIItsMljF/?igsh=bHl6bzZhcGkxdW50"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div> */}
              </div>
            </div> : ""}

            <div className={`side-curve ${gallery ? "full" : ""}`}></div>
          </div>
          <div className="parallax-inner">
            {!gallery && (
              <button
                onClick={() => {
                  setGallery(true);
                }}
                className="btn Art_gallery_button text-white"
              >
                Art Gallery
              </button>
            )}
          </div>
        </div>
      </section >
      {/*    <section className="py-5 yt_video">
        <div className="container">
          <div className="row ">
            
            <div className="col-md-4 yt_content">
              <iframe
                width="100%"
                className="rounded"
                height="300px"
                src="https://www.youtube.com/embed/P2PmCXQGKxU?si=uGDWl30nggey6v9M"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-4 yt_content">
              <iframe
                width="100%"
                className="rounded"
                height="300px"
                src="https://www.youtube.com/embed/P2PmCXQGKxU?si=uGDWl30nggey6v9M"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-4 yt_content">
              <iframe
                width="100%"
                className="rounded"
                height="300px"
                src="https://www.youtube.com/embed/P2PmCXQGKxU?si=uGDWl30nggey6v9M"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}

      < section className="py-1" >
        <div className="container">
          <h2 className="fs-50 text-center my-3 fw-600">Look Book</h2>

          <div className="row mt-4">
            <div
              className={`col-md-4 mb-3 col-lg-4 px-md-1 position-relative ${style.lookBook1}`}
              onClick={() => router.push("look-book/1")}
            >
              <Image className="img-fluid rounded" src={I3} alt="look Book" />
              <div className="text_lookbook top15">
                <p className={`vw12 fw-600 ${style.blogText1}`}>
                  Up Your <br />Presentation Game
                </p>
              </div>
            </div>
            <div
              className={`col-md-4 mb-3 col-lg-4 px-md-1 position-relative ${style.lookBook2}`}
              onClick={() => router.push("look-book/2")}
            >
              <Image src={I2} className="img-fluid rounded" alt="look Book" />
              <div className="text_lookbook top15">
                <p className={`vw12 fw-600 ${style.blogText2}`}>
                  Spark Your Creativity <br />  With Luxor Pens
                </p>
              </div>
            </div>
            <div
              className={`col-md-4 mb-3 col-lg-4 px-md-1 position-relative ${style.lookBook3}`}
              onClick={() => router.push("look-book/3")}
            >
              <Image className="img-fluid rounded" alt="look Book" src={I1} />
              <div className="text_lookbook top1">
                <p className={`vw12 fw-600 ${style.blogText3}`}>
                  How To Choose The Best Highlighter Pen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section
        className="overflow-hidden"
      >
        <div className={`container-fluid`}>
          {/* <div className="container">
          <div className="row flex-nowrap overflow-auto my-4">
            <div className="col-sm-6 col-md-4 mb-3 effect">
              <Image
                className="img-fluid rounded p-4"
                src={Imag11}
                alt="homepage"
              />
            </div>
            <div className="col-sm-6  col-md-4 mb-3 effect">
              <Image
                className="img-fluid rounded p-4"
                src={Imag12}
                alt="homepage"
              />
            </div>
            <div className="col-sm-6 col-md-4 mb-3 effect">
              <Image
                className="img-fluid rounded p-4"
                src={Imag13}
                alt="homepage"
              />
            </div>
          </div>

          </div>*/}
        </div>
        <div>
          <Ugcslider />
        </div>
      </section>

      {/* ---------------------------------------------organisation container---------------------------------------------- */}

      <WomanLed />

      {/* ----------------------------------------------about luxor-------------------------------------- */}

      <section
        className="py-3 mb-4"
      >
        <div>
          {/* <h2 className="fs-40 text-white text-center mb-4 fw-600">
            What People Say About Luxor
          </h2> */}
          <WhatPeopleSayCarosel />
          {/* <Slider {...settings}>
            {aboutLuxor.map((item) => (
              <div
                className="border-1"
                style={{ width: "80%", backgroundColor: "red" }}
              >
                <div
                  className="card-body p-4"
                  style={{
                    borderRadius: "7px",
                    width: "80%",
                    margin: "auto",
                    background: "white",
                  }}
                >
                  <p className="fs-20 mb-4 text_justify">{item.comment}</p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Image
                        className="img-fluid rounded-pill"
                        src={Client}
                        alt="homepage"
                      />
                    </div>
                    <div className="align-self-center">
                      <p className="fs-20 mt-4  mb-2 text-end fw-600">
                        {item.name}
                      </p>
                      <p className="fs-16 mt-2 text-end fw-600">
                        -{item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider> */}
          {/* <div className="row mt-5">
            <div className="col-md-2 col-lg-3"></div>
            <div className="col-md-8 col-lg-6 mb-3">
              <div className="card  border-0 shadow-light">
                <div className="card-body p-4">
                  <p className="fs-20 mb-4 text_justify">
                    With 20 fit and dexterous pens ready and raring to work in
                    your favor impelling you into writing magical albeit gelled
                    ink-less lines on page after treasured page in an
                    increasingly digital-writing driven world, what more can you
                    ask for?
                  </p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Image
                        className="img-fluid rounded-pill"
                        src={Client}
                        alt="homepage"
                      />
                    </div>
                    <div className="align-self-center">
                      <p className="fs-20 mt-4  mb-2 text-end fw-600">John</p>
                      <p className="fs-16 mt-2 text-end fw-600">
                        -Director, GH Coms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-3"></div>
          </div> */}
        </div>
      </section>

      {/* ------------------------------------did you know section-------------------------------------- */}

      {/* <section className="dyk-container">
        <div className="dyk-banner">
          <div className="dyk-banner1">
            <Image height={450} width={1000} src={Image17} alt="homepage" />
          </div>
        </div>
        
        <div className="dyk-scroll">
          <h4>
            Luxor products have a presence across more than 106 countries.
          </h4>

          <div className="arrow-btn-left">
            <button></button>
          </div>

          <div className="arrow-btn-left">
            <button></button>
          </div>
        </div>
      </section> */}

      {/* ----------------------------------------footer section------------------------------------------- */}
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          Hello from the modal!
        </Modal>
      }
      <section className="footer">
        <h2 class="fs-50 text-center my-2 fw-600" id="Partners">
          Be Our Partner/Reseller
        </h2>

        <div className="partner-cont">
          <Image height={450} width={1000} src={Image18} alt="homepage" />
        </div>

        <div className="footer-btn">
          {/* <div className="footer-btn1">
            <button>Know More</button>
          </div> */}
          <div className="footer-btn2">

            <button onClick={() => setShowModal(true)}>Enquire Now</button>
          </div>
        </div>

        {/* --------------------------------- */}

        {/* <h2 class="fs-40  text-center my-5 fw-600" id="award">
      Certificates
    </h2> */}
        <section className="certifications pb-5">
          <div className="container">
            <h2 class="fs-50 text-center my-5 fw-600" text_black id="award">
              Certificates
            </h2>
            <div className="row">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col">
                        <Image src={Recycled} alt="Recycled" />
                      </div>
                      <div className="col">
                        <Image src={Reach} alt="ap" />
                      </div>
                      <div className="col">
                        <Image src={ORK} alt="ap" />
                      </div>
                      <div className="col">
                        <Image src={OHS} alt="ap" />
                      </div>
                      <div className="col">
                        <Image src={ISO14001} alt="ap" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col">
                        <Image src={ISo9001} alt="ap" />
                      </div>
                      <div className="col">
                        <Image src={EN71} alt="ap" />
                      </div>
                      <div className="col">
                        <Image src={Eco} alt="Eco" />
                      </div>
                      <div className="col">
                        <Image src={Ce} alt="Ce" />
                      </div>
                      <div className="col">
                        <Image src={Ap} alt="ap" />
                      </div>
                      <div className="col">
                        <Image src={Tpat} alt="ap" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev button_left" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next button_right" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                  <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <ol className="carousel-indicators">
                  <li data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active"></li>
                  <li data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1"></li>
                </ol>
              </div>

            </div>
          </div>
        </section>
        <div className="background">
          <h2 class="fs-50 text-center my-5 fw-600">
            Awards & Recognitions
          </h2>

          <div className="award-img-cont">
            {/* <div className="pen-pointer">
              <Image src={Image27} alt="homepage" />
            </div> */}

            <div className="award-img">
              <Image src={Image23} alt="homepage" />
            </div>

            <div className="award-img">
              <Image src={Image24} alt="homepage" />
            </div>

            <div className="award-img">
              <Image src={Image25} alt="homepage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
