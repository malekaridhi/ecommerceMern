import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Container = styled.div`
display:flex;
`
const Left = styled.div`
flex:1;
sisplay:flex;
flex-direction: column;
`
const Logo = styled.h1`

`
const Desc = styled.p`

`
const SocialContainer = styled.div`

`
const SocialIcon = styled.div`
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
flex:1;
`

const Footer = () => {
    return ( 
        <>
        <Container>
            <Left>
                <Logo>BANANA.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis incidunt impedit nisi ex repudiandae quas fuga corrupti, quos eos est aperiam reprehenderit nesciunt iure omnis, facere dolorem mollitia minima.</Desc>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <PinterestIcon/>
                    </SocialIcon>
                    
                </SocialContainer>
            </Left>
            <Center>

            </Center>
            <Right>

            </Right>
        </Container>
        </>
     );
}
 
export default Footer;