import React from 'react';

import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`

`
const Circle =styled.div`

`
const Image = styled.img`
`
const Info = styled.div`

`
const Icon = styled.div`

`


const ProductItems = ({item}) => {
    return ( 
        <>
        <Container>
          <Circle/>
          <Image src={item.img}/>
          <Info>
              <Icon>
                 <ShoppingCartOutlinedIcon/>
              </Icon>
              <Icon>
                 <ShoppingCartOutlinedIcon/>
              </Icon>
              <Icon>
                 <ShoppingCartOutlinedIcon/>
              </Icon>
          </Info>
        </Container>
        </>
     );
}
 
export default ProductItems;