import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import {
  allProductsCategory,
  getAllCatWiseProducts,
  getMarkerCategory,
} from "../Actions/action";
const HomePage = dynamic(() => import("components/HomePage"), { ssr: false });

function App(props) {
  const [markers_cat, set_marker_cat] = useState(props.marker_cat);
  const [all_prdcts, set_all_prd] = useState(props.all_prd);

  return <HomePage all_prdcts={all_prdcts} />;
}

export async function getServerSideProps({ req, res }) {
  // let {result , status } = await getMarkerCategory()

  let { result, status } = await allProductsCategory();

  if (status && result.length > 0) {
    return {
      props: {
        all_prd: result,
      },
    };
  } else {
  }
  return {
    props: {
      all_prd: [],
      // json: json.result
    },
  };
}

export default App;
