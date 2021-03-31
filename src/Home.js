import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Product from './Product';
import { useSelector } from 'react-redux'
import { getProducts } from './actions';
import { useDispatch } from 'react-redux'
import { ArrowLeft, ArrowRight } from '@material-ui/icons';

function Home() {
  const dispatch = useDispatch();
  const homeRow = useRef(null);
  const [scrollccounter, setscrollccounter] = useState(0);
  const getAllProductDetails = async () => {
    const response = await getProducts();
    dispatch({ type: 'GET_PRODUCTS', payload: response });
  }
  useEffect(() => {
    getAllProductDetails();
  }, []);
  const allProducts = useSelector(state => state.getProductDetails);
  const moveitToRight = (direction) => {
    direction == "right" ? homeRow.current.scrollLeft += 1100 : homeRow.current.scrollLeft -= 1100;
  }
  return (
    <div className="home">

      <div className="home__container">
        <img className="home__image" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Consumables/AugART/Headers/PC_rec_pantry._SL1280_FMpng_.png" alt="" />
      </div>
      <div style={{ position: "relative" }}>
        <div className="scrollarrow left" onClick={() => moveitToRight("left")}>
          <ArrowLeft />
        </div>
        <div className="home__row" ref={homeRow} onScroll={() => console.log(homeRow.current.scrollLeft)}>
          {allProducts.map(product => <Product product={product} key={product.id} />)}
        </div>
        <div className="scrollarrow right" onClick={() => moveitToRight("right")}>
          <ArrowRight />
        </div>
      </div>
      <div className="home__container">
        <img className="home__image" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Consumables/AugART/Headers/PC_rec_pantry._SL1280_FMpng_.png" alt="" />
      </div>
    </div>
  )
}

export default Home
