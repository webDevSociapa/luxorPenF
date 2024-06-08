import React, { useState } from "react";
import Image14 from "public/assets/org11.png";
import Image15 from "public/assets/org12.png";
import Image16 from "public/assets/org3.png";
import Image from "next/image";

export default function () {
  const [selected, setSelected] = useState("PHOTOS");

  return (
    <React.Fragment>
      <section className="py-5">
        <div className="container">
          <h2 className="fs-40 text-center mb-4 fw-600 ">
            A Woman-Led Organization
          </h2>
          {/* <div className="d-flex justify-content-center mb-2">
            <button
              onClick={() => {
                setSelected("PHOTOS");
              }}
              className={`btn btn_secondary${selected=='PHOTOS' ? '' : '-outline' } me-3 mb-2 fs-16 fw-600 ${selected=='PHOTOS' ? 'text-white':'tetx_lightred'} `}      >
              Photos
            </button>
            <button
              onClick={() => {
                setSelected("VIDEOS");
              }}
              className={`btn btn_secondary${selected=='VIDEOS' ? '' : '-outline' } me-3 mb-2 fs-16 fw-600 ${selected=='VIDEOS' ? 'text-white':'tetx_lightred'} `}
            >
              Videos
            </button>
          </div> */}
          {selected == "PHOTOS" ? (
            <div className="row mt-5">
              <div className="col-md-4 mb-2">
                <Image className="img-fluid" src={Image14} alt="homepage" />
              </div>

              <div className="col-md-4 mb-2">
                <Image className="img-fluid" src={Image15} alt="homepage" />
              </div>

              <div className="col-md-4 mb-2">
                <Image className="img-fluid" src={Image16} alt="homepage" />
              </div>
            </div>
          ) : (
            <div className="row mt-5">
              <div className="col-md-4 mb-2">
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

              <div className="col-md-4 mb-2">
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

              <div className="col-md-4 mb-2">
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
          )}
        </div>
      </section>
    </React.Fragment>
  );
}
