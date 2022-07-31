import React, { Fragment, useEffect } from "react";

import { fetchLineFoods } from "../apis/line_foods";

export const Orders = () => {
  useEffect(() => {
    fetchLineFoods()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return <Fragment>注文画面</Fragment>;
};
