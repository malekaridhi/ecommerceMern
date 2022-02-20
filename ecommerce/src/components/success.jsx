import React from 'react';
import { useLocation } from 'react-router-dom';
const Success = () => {
    const location = useLocation()
    return (<>
    <h1> congrats your payment is sucessful </h1>
    </>  );
}
 
export default Success;