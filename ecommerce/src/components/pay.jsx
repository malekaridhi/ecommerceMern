import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const key ="pk_test_51JrOvbJBdjDRLoxKFdpAgh83o2B0Rki5O9Mnzm795JkEUWJR3y2b0p4QELr26esDloS3pxRgWE1qbiTVVx2BtQXp00hkIyYYR2"

const Pay = () => {
    const onToken = (token) =>{
       console.log(token) 
    }
    return ( <>
    <StripeCheckout name="Banana Shop" 
    image="https://img2.freepng.fr/20180519/rya/kisspng-logo-phoenix-art-5afffc96998f80.692522331526725782629.jpg"
    billingAddress
    shippingAddress
    description='your total is $20'
    amount={2000}
    token={onToken}
    stripeKey={key}
    >
     <button>pay</button>

    </StripeCheckout>
    </> );
}
 
export default Pay;