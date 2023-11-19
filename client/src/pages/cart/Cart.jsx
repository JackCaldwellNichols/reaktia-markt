import React, { useState, useEffect } from "react";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import { cleanCart, removeProduct } from "../../redux/features/cartSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import logo from "../../assets/logo.png";

const Cart = () => {
  const cart = useSelector((state) => state.data.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);
  const [orderInfo, setOrderInfo] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onToken = (token) => {
    setStripeToken(token);
  };
  const handleEmpty = () => {
    dispatch(cleanCart());
  };

  const handleClick = (product) => {
    dispatch(removeProduct(product));
  };

  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await axios.post(import.meta.env.VITE_SERVER_URL, {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });

        // navigate(-1, {
        //   state: {
        //     stripeData: res.data,
        //     products: cart,
        //   },
        // });
        handleOpen();
        dispatch(cleanCart());
        setOrderInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && cart.total >= 1 && makeReq();
  }, [stripeToken, cart.total, navigate]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  };

  return (
    <div className="cartPage">
      <div className="wrapper">
        <h1 className="cartTitle">Your Cart</h1>
        <div className="top">
          <div className="btnContainer">
            <button>Continue Shopping</button>
            <button onClick={handleEmpty}>Empty Cart</button>
          </div>
          <div className="topText">
            <span className="cartItems">Shopping Bag ({cart.quantity})</span>
          </div>
        </div>
        <div className="bottom">
          {cart.products.length === 0 ? (
            <div className="info">
              <h2>Your cart is empty.</h2>
            </div>
          ) : (
            <div className="info">
              {cart.products.map((product, index) => (
                <div key={index} className="product">
                  <div className="productDetails">
                    <img src={product.images[0]} />
                    <div className="details">
                      <span className="productTitle">
                        <b>Product:</b> {product.title}
                      </span>
                      <span className="productPrice">
                        <b>Description:</b> {product.description}
                      </span>
                      <span className="productId">
                        <b>Product ID:</b> {product.id}
                      </span>
                      <span className="productId">
                        ${product.price * product.quantity}
                      </span>
                      <div className="priceDetails">
                        <div className="productAmountContainer">
                          <span className="productAmount">
                            {product.quantity}
                          </span>
                          <DeleteOutlineOutlinedIcon
                            className="deleteIcon"
                            onClick={() => handleClick(product)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="summary">
            <h1 className="summaryTitle">Order Summary</h1>
            <div className="summaryItem">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">
                ${Math.round(cart.total * 100) / 100}
              </span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Estimated Shipping Costs</span>
              <span className="summaryItemPrice">$5.90</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">$5.90</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">
                ${Math.round(cart.total * 100) / 100}
              </span>
            </div>
            <StripeCheckout
              name="Reaktia Markt"
              image=""
              billingAddress
              shippingAddress
              description="total"
              amount={cart.total * 100}
              token={onToken}
              stripeKey={import.meta.env.VITE_STRIPE_PK}
            >
              <button
                className="checkoutBtn"
                disabled={cart.products.length === 0}
              >
                Checkout
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h2 style={{ padding: "10px 0px", fontWeight: "200" }}>
              Thank you for your order.
            </h2>
            <h3 style={{ padding: "10px 0px", fontWeight: "200" }}>
              {orderInfo?.outcome.seller_message}
            </h3>
            <p>Order ID: {orderInfo?.id}</p>
            <p>Order Amount: ${orderInfo?.amount / 100}</p>
            <h3 style={{ padding: "10px 0px", fontWeight: "200" }}>
              Shipping Details:
            </h3>
            <p>{orderInfo?.billing_details.address.line1}</p>
            <p>{orderInfo?.billing_details.address.city}</p>
            <p>{orderInfo?.billing_details.address.country}</p>
            <p>{orderInfo?.billing_details.address.postal_code}</p>
          </div>
          <img
            src={logo}
            style={{
              backgroundColor: "#f05941",
              height: "50px",
              width: "100%",
              objectFit: "contain",
              margin: "10px 0px",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
