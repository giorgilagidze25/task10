import React, { useState } from "react";
import "./App.css";
import Header from "./coomponent/Header/Header";
import Slider from "./coomponent/Slider/Slider";

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddCard = () => {
    const cardInfo = {
      id: 1,
      title: "Fall Limited Edition Sneakers",
      desc: "well done",
      price: 125,
    };

    cardInfo.total = cardInfo.price * count2;
    setCart([cardInfo]);
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter((el) => el.id !== id);
    setCart(updatedCart);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <Header onCartClick={toggleCartVisibility} />

      {isCartVisible && (
        <div className="cart-container">
          <div className="CartBox">
            <h1 className="CartTitle">Cart</h1>
            <div className="row"></div>

            {cart.length === 0 ? (
              <h2 className="empty-cart-text">Your cart is empty.</h2>
            ) : (
              cart.map((el) => (
                <div key={el.id} className="flex2">
                  <img className="CartImg" src="assets/1.png" alt="" width={60} />
                  <h1 className="CartName">{el.title}</h1>
                  <h1 className="CartTitle2">price:${el.price}</h1>
                  <h1 className="CartTitle3">total:${el.total}</h1>
                  <button className="deleteBtn" onClick={() => handleDelete(el.id)}>
                    <img src="/assets/delete.png" alt="" />
                  </button>
                </div>
              ))
            )}

            {cart.length > 0 && <button className="CheckoutBtn">Checkout</button>}
          </div>
        </div>
      )}

      <Slider />
      <div className="box">
        <p className="TextTitle2">Sneaker Company</p>
        <p className="TextTitle">Fall Limited Edition Sneakers</p>
        <p className="Text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything the
          weather can offer.
        </p>

        <div className="flex">
          <p className="DiscountPrice">$125.00</p>
          <div className="Discount">50%</div>
          <p className="RealPrice">$250.00</p>
        </div>

        <div className="box3">
          <div className="box2">
            <button
              className="deduction"
              onClick={() => {
                if (count > 0) {
                  setCount2(count2 - 1);
                }
              }}
            >
              -
            </button>
            <p className="count">{count2}</p>
            <button className="addition" onClick={() => setCount2(count2 + 1)}>
              +
            </button>
          </div>

          <button className="AddCart" onClick={handleAddCard}>
            <img src="/assets/icon2.png" className="market-icon2" alt="" /> Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
