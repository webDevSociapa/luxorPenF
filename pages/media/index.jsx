import Image from "next/image";
import React, { useState } from "react";
import MediaBanner from "public/assets/images/media/media-banner.jpg";
import Gallery1 from "public/assets/images/media/1.jpg";
import Gallery2 from "public/assets/images/media/2.jpg";
import Gallery3 from "public/assets/images/media/3.jpg";
import Gallery4 from "public/assets/images/media/4.jpg";
import News1 from "public/assets/images/media/Indian Express.png";
import News2 from "public/assets/images/media/India Forbes.png";
import News3 from "public/assets/images/media/ET.png";
import News4 from "public/assets/images/media/Chronic.png";
import News5 from "public/assets/images/media/DNA.png";
import CustomCarousel from "./../../components/customCarousel/CustomCarousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  className: "media-slider",
  arrows: true,
};

const carouselItems = [
  <Image key={1} src={News1} alt="Image 1" />,
  <Image key={2} src={News2} alt="Image 2" />,
  <Image key={3} src={News3} alt="Image 3" />,
  <Image key={3} src={News4} alt="Image 4" />,
  <Image key={3} src={News5} alt="Image 5" />,
];

const index = () => {
  const [isOpen, setOpen] = useState(false);
  const vidId = "LT9SSgBPnUM?si=a_4YnRiwVXIsgZxI";
  return (
    <div className="media-container">
      <section>
        <div>
          <Image src={MediaBanner} alt="banner" className="w-100 img-fluid" />
        </div>
      </section>
      <section className="media-section-container container">
        <div className="media-gallery-container ">
          <div className="row">
            <div className="col-sm gallery-left">
              <Image src={Gallery1} onClick={() => setOpen(true)} />

              <div className="media-gallery-content">
                <h5 className="media-gallery-title">
                  Redefining the Face of the Future for Women{" "}
                </h5>
              
                <p className="media-gallery-description">
                  The motto of our lives needs to be to keep trying and to
                  embrace change. We need to have the attitude of never giving
                  up, and if we do that, everything can be achieved.
                </p>
              </div>

              {vidId && (
                <ModalVideo
                  channel="youtube"
                  isOpen={isOpen}
                  videoId={vidId}
                  youtube={{ mute: 0, autoplay: true }}
                  onClose={() => setOpen(false)}
                />
              )}
            </div>
            <div className="col-sm gallery-right">
              <Image src={Gallery2} />
              <div className="media-gallery-content">
                <h5 className="media-gallery-title">
                Tomorrow's Luxor collaboration with Schneider Pen is future-oriented.
                </h5>
                <p className="media-gallery-description">
                  One of India's largest writing instrument brands Luxor has
                  announced its exclusive partnership with Schneider Pen,
                  Germany to launch a new portfolio of innovative and
                  high-performance writing instruments in India.
                </p>
              </div>
            </div>
          </div>
          <div className="row media-gallery-row2">
            <div className="col-sm gallery-left">
              <Image src={Gallery3} />
              <div className="media-gallery-content">
                <h5 className="media-gallery-title">
                  Virat Kohli Announced Brand Ambassador For Luxor
                </h5>
                <p className="media-gallery-description">
                  Luxor has appointed Virat Kohli as the new brand ambassador.
                  Luxor, has unveiled a new brand film ahead of the ICC Cricket
                  World Cup 2023, featuring their new brand ambassador,
                  cricketer Virat Kohli.The film showcases the Luxor Schneider
                  LX MAX pen, the first brand launch as part of the Luxor
                  Schneider partnership, signed earlier this year.
                </p>
              </div>
            </div>
            <div className="col-sm gallery-right">
              <Image src={Gallery4} />
              <div className="media-gallery-content">
                <h5 className="media-gallery-title">
                  Luxor to be a Rs 1000 crore company in three to five years
                </h5>
                <p className="media-gallery-description">
                  Writing instruments major Luxor aims at becoming a Rs 1000
                  crore company in the next 3-5 years and to grow its market
                  share from current 22 per cent to 30 per cent in its operating
                  industry segments, said Pooja Jain Gupta, Managing Director of
                  the company in an interview with Sangeetha G.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="media-news-section">
          <h1 className="media-news-title">Featured Across</h1>
          <div className="media-news-carousel">
            <Slider {...settings}>
              {carouselItems.map((item) => (
                <div>{item}</div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
