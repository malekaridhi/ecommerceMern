import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
height: 30px;
background-color: #f2be00;
color: #606e6b;
display:flex;
align-items: center;
justify-content:center;
font-size:14px;
font-weight: 500;
`


const Announcement = () => {
    return (<>
    <Container>
        Super Deal! Free Shipping On orders This Friday!!!
    </Container>
    </>  );
}
 
export default Announcement;