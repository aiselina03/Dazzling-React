import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";

function Detail() {
  const [products, setProducts] = useState([]);
  const {addBasket} = useContext(BasketContext)
  let { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  return (
    <>
      <Helmet>
        <title>Detail Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="detail">
        <div className="card">
          <div className="header">
            <h2>{products.name}</h2>
            <div className="infos">
              <p>
                <i className="fa-regular fa-calendar"></i>
                {products.date}
              </p>
              <p>
                <i className="fa-solid fa-folder-open"></i>
                {products.category}
              </p>

              <p>
                <i
                  className="fa-solid fa-cart-shopping"
                  onClick={() => addBasket(products)}
                ></i>
                Add to Card
              </p>
            </div>
          </div>
          <div className="main">
            <div className="image">
              <img src={products.image} width={400} alt="" />
            </div>
            <div className="desc">
              <p>{products.desc}</p>
              <h4>${products.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
