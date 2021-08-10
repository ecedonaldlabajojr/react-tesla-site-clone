import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    return (
        <Container>
            <a href="">
                <img src="images/logo.svg" alt="logo" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu>
                </CustomMenu>

            </RightMenu>
            <BurgerNav>
                <CloseWrapper>
                    <CustomClose />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cyber Truck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Roadaster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    right: 0;
    padding: 0 20px;
    justify-content: space-between;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 5%;
    flex: 1;
    justify-content: center;

    a {
        font-weight: 600;
        text-decoration: uppercase;
    }

     @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-weight: 600;
        text-decoration: uppercase;
        margin-right: 10px;
        padding: 0 10px;
    };
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    z-index: 100;
    min-width: 300px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    align-items: stretch;
    list-style-type: none;
    padding: 20px;
    text-align: left;

    li {
        width: 100%;
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        
        a {
            font-weight: 600;
        }
    }
    
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    position: relative;
    text-align: right;
`