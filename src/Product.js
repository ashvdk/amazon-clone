import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import React, { useState } from 'react'
import { Carousel } from './Carousel';
import './Product.css';
import { images } from "./image-data";
import LensIcon from '@material-ui/icons/Lens';

function Product({ product }) {
  const [productImagescounter, setproductImagescounter] = useState(0);
  const length = images.length - 1;
  return (
    <div className="product">
      <div className="product__info">
        <div>{product.title}</div>
        <div className="produt__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </div>
        <div className="product__rating">
          <span>*</span> <span>*</span> <span>*</span> <span>*</span> <span>*</span>
        </div>
      </div>
      <div className="product__image">
        <ArrowLeft className="product__leftrightarrows left" onClick={() => {
          console.log(productImagescounter);
          if (productImagescounter > 0) {
            setproductImagescounter(productImagescounter - 1)
          }
        }}
        />
        <img src={images[productImagescounter]} alt="" />
        <ArrowRight className="product__leftrightarrows right" onClick={() => {
          console.log(productImagescounter);
          if (productImagescounter < length) {
            setproductImagescounter(productImagescounter + 1)
          }
        }}
        />
        <div className="product__imageDotIndicater">
          {images.map((val, idx) => <LensIcon className="dots" style={{ color: idx == productImagescounter ? "white" : "black" }} />)}
        </div>

      </div>
      <button className="product__buynowbutton">Add to basket</button>
    </div>
  )
}

export default Product
