import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../../context/basketContext";
import "./style.scss";

function Basket() {
  const { basket, removeBasket, getTotal, increaseCount, decreaseCount } =useContext(BasketContext);
  return (
    <>
      <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="basket">
        <table>
          <thead>
             <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Total Price</th>
            <th>Date</th>
            <th>Category</th>
            <th>Delete</th>
          </tr> 
          </thead>
        <tbody>
            {basket.map((x) => (
            <tr key={x._id}>
              <td>
                <img src={x.image} alt="" width={200} />
              </td>
              <td>{x.name}</td>
              <td>${x.price}</td>
              <td>
                <div className="chevron">
                  <i
                    className="fa-solid fa-chevron-up"
                    onClick={() => increaseCount(x)}
                  ></i>
                  <i
                    className="fa-solid fa-chevron-down"
                    onClick={() => decreaseCount(x)}
                  ></i>
                </div>
                {x.count}
              </td>
              <td>${x.count * x.price}</td>
              <td>{x.date}</td>
              <td>{x.category}</td>
              <td>
                <button onClick={() => removeBasket(x)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        
        </table>
        <div className="total">
          <h3>Total Price: ${getTotal()}</h3>
        </div>
      </div>
    </>
  );
}

export default Basket;
