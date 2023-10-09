import React from "react";
import AddtoCart from "./AddtoCart";

const ProductCart = () => {
  return (
    <div className={'p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'}>
      <AddtoCart/>
    </div>
  );
};

export default ProductCart;
