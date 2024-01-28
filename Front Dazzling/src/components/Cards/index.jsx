import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";

function Cards() {
  const [products, setProducts] = useState([]);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function lower(data) {
    if (typeof data === "string") {
      return data.toLowerCase();
    }
    return data;
  }

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="cards">
            {products
              .filter((x) => x.name.toLowerCase().includes(input.toLowerCase()))
              .sort((a, b) => {
                if (sort && sort.asc === true) {
                  return lower(a[sort.property]) > lower(b[sort.property]) ? 1 : lower(b[sort.property]) > lower(a[sort.property]) ? -1 : 0;
                } else if (sort && sort.asc === false) {
                  return lower(a[sort.property] < b[sort.property]) ? 1 : lower(b[sort.property]) < lower(a[sort.property]) ? -1 : 0;
                } else {
                  return 0;
                }
              })
              .map((x) => (
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
                        <i
                          className={`${
                            checkIsWishlist(x)
                              ? "fa-solid fa-heart"
                              : "fa-regular fa-heart"
                          }`}
                          onClick={() => addRemoveWishlist(x)}
                        ></i>
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
                      <p>{x.desc}</p>
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
          <div className="right">
            <div className="search">
              <input
                placeholder="Search..."
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="filter">
              <h3>
                <i className="fa-solid fa-filter"></i> Filter By Name:
              </h3>
              <button onClick={() => setSort({ property: "name", asc: true })}>
                A-Z
              </button>
              <button onClick={() => setSort({ property: "name", asc: false })}>
                Z-A
              </button>
              <button onClick={() => setSort(null)}>Default</button>
              <h3>
                <i className="fa-solid fa-filter-circle-dollar"></i> Filter By
                Price:
              </h3>
              <button onClick={() => setSort({ property: "price", asc: true })}>
                <i className="fa-solid fa-up-long"></i>
              </button>
              <button
                onClick={() => setSort({ property: "price", asc: false })}
              >
                <i className="fa-solid fa-down-long"></i>
              </button>
              <button onClick={() => setSort(null)}>Default</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
