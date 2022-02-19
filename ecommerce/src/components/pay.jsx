import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const key =""
  

const Pay = () => {
  const [stripeToken, setStripToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/success")
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken,navigate]);

  return (
    <>
    {stripeToken/(
        <span>processing. Please wait...</span>
    )}
      <StripeCheckout
        name="Banana Shop"
        image="https://img2.freepng.fr/20180519/rya/kisspng-logo-phoenix-art-5afffc96998f80.692522331526725782629.jpg"
        billingAddress
        shippingAddress
        description="your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={key}
      >
        <button>pay</button>
      </StripeCheckout>
    </>
  );
};

export default Pay;
