import Image from "next/image";
import React from "react";
import EventBanner from "public/assets/images/events/event-banner.jpg";
import gallery1 from "public/assets/images/events/1.jpg";
import gallery2 from "public/assets/images/events/2.jpg";
import gallery3 from "public/assets/images/events/3.jpg";

const index = () => {
  return (
    <div className="events-container">
      <section>
        <div>
          <Image src={EventBanner} alt="banner" className="w-100 img-fluid" />
        </div>
      </section>
      <section className="container">
        <div className="event-content-container">
          <div className="event-title">
            <h1>PAPER WORLD EXHIBITION</h1>
          </div>
          <div className="event-sub-heading text_black">
            <h3>
              Paperworld, the biggest trade fair for the Stationery, Back to
              School Supplies, and Writing Instruments Industry.
            </h3>
          </div>
          <div className="event-description text_black">
            <p>
              It is a one-stop solution for all stationery sourcing needs and a
              B2B trade platform to discover the latest market trends and
              developments in stationery, office supplies, writing instruments,
              etc. Amidst the vibrant energy of Paper world, Luxor made an
              indelible mark, showcasing innovation and excellence.
            </p>
          </div>
        </div>
        <div className="event-gallery-container row">
          <div className="col-sm">
            <Image src={gallery1} />
          </div>
          <div className="col-sm">
            <Image src={gallery2} />
          </div>
          <div className="col-sm">
            <Image src={gallery3} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
