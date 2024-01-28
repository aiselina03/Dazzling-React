import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";

function Wishlist() {
  const { addBasket } = useContext(BasketContext);
  const { wishlist, addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="wishlist">
        <div className="cards">
          {wishlist.map((x) => (
            <div className="card" key={x._id}>
              <div className="header">
                <h2>{x.name}</h2>
                <div className="infos">
                  <p>
                    <i className="fa-regular fa-calendar"></i>
                    {x.date}
                  </p>
                  <p>
                    <i className="fa-solid fa-folder-open"></i>
                    {x.category}
                  </p>
                  <p>
                  <i className={`${checkIsWishlist(x) ? "fa-solid fa-heart" : "fa-regular fa-heart"}`} onClick={()=>addRemoveWishlist(x)}></i>
                    Add to Wishlist
                  </p>
                  <p>
                    <i
                      className="fa-solid fa-cart-shopping"
                      onClick={() => addBasket(x)}
                    ></i>
                    Add to Card
                  </p>
                </div>
              </div>
              <div className="main">
                <div className="image">
                  <img src={x.image} alt="" />
                </div>
                <div className="desc">
                  <h4>${x.price}</h4>
                  <button>
                    <NavLink to={"/detail/" + x._id}>
                      Continue reading
                      <i className="fa-solid fa-chevron-right"></i>
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
