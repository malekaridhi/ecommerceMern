import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
const Container = styled.div`

`;
const FilterContainer = styled.div`

`
const Title = styled.h1`

`
const Filter = styled.div`

`

const PoductList = () => {
    return ( 
        <>
        <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>filter1</Filter>
            <Filter>filter2</Filter>
        </FilterContainer>
        </Container>
        </>
     );
}
 
export default PoductList;