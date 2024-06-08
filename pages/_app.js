import "../styles/globals.css";
import "../public/assets/css/hp.css";
import "../public/assets/css/prd.css";
import "../public/assets/css/product_animation.css";
import "../styles/journeyandmap.css";
import React, { useState } from "react";
import Header from "@components/header";
import { getAllCatWiseProducts, getAllPens } from "../Actions/action";
import NextNProgress from "nextjs-progressbar";
import "react-modal-video/scss/modal-video.scss";

function MyApp({ Component, pageProps, all_prd, data }) {
  const [all_main_cat_wise_prods, set_all_main_cat_wise_prods] = useState(data);

  return (
    <React.Fragment>
      <div style={{ overflowX: "hidden" }}>
        <Header all_main_cat_wise_prods={all_main_cat_wise_prods} />
        <NextNProgress color="#ffffff" />
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // Fetch data using Axios
  // let { status, result } = await getAllPens();

  // Pass the data to the component as a prop
  return { data: null };
};

export default MyApp;
