import React from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
const Container = styled.div``
const Success = () => {
    const location = useLocation()
    console.log(location)
    return (<>
    <h1> congrats your payment is sucessful </h1>
    </>  );
}
 
export default Success;