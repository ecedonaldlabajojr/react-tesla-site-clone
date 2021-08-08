import React from 'react'
import styled from 'styled-components';

const Section = ({ data = {} }) => {
    const { title = "", description = "", bgcImg = "", leftBtnText = "", rightBtnText = "" } = data;
    return (
        <Wrap bgcImg={bgcImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    {leftBtnText && <LeftButton>{leftBtnText}</LeftButton>}
                    {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
                </ButtonGroup>
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.section`
    width: 100vw;
    height: 100vh;
    background: url(${props => props.bgcImg}) no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 20px;
    position: relative;
    z-index: 3;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgb(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 12px;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
    display: relative;

    &::after {
        content:"";
        position: absolute;
        width:100%;
        height: 200px;
        left: 0;
        bottom:1px;
        z-index: 2;
        opacity: 0.25;
        background: linear-gradient(to bottom, transparent 0%, black 100%);
    }
`