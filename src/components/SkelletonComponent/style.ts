"use client"
import styled, { keyframes } from 'styled-components'
import { darken } from 'polished'

const animationImg = keyframes`
    0% {
        background-size: 100% 100%;
    }
    50% {
        background-size: 200% 200%;
    }
    100% {
        background-size: 400% 400%;
    }
`

const Container = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 0.50rem;
    box-shadow: 0px 0px 10px 1px #CCC;
    position: relative;

    button{
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        border: 0;
        height: 30px;
        border-bottom-left-radius: 0.50rem;
        border-bottom-right-radius: 0.50rem;

        background-size: 100% 100%;
        background: linear-gradient(-45deg, #F2F2F2, #FAFAFA, #F2F2F2, #FAFAFA);
        animation-name: ${animationImg};
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }
    @media (max-width: 650px) {
        width: 230px;
        height: 270px;
    }
    
`

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    div.img{
        width: 130px;
        height: 130px;
        background-size: 100% 100%;
        background: linear-gradient(-45deg, #F2F2F2, #FAFAFA, #F2F2F2, #FAFAFA);
        animation-name: ${animationImg};
        animation-duration: 2s;
        animation-iteration-count: infinite;
        border-radius: 0.50rem;
        margin-top: 10px;
    }

    @media (max-width: 650px) {
        img{
            width: 100px;
            height: 100px;
        };
    }
    
`

const ProductData = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    
    div{
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        text-align: left !important;
        
        div{
            width: 100px;
            height: 50px;
            background-size: 100% 100%;
            background: linear-gradient(-45deg, #F2F2F2, #FAFAFA, #F2F2F2, #FAFAFA);
            animation-name: ${animationImg};
            animation-duration: 2s;
            animation-iteration-count: infinite;
            margin-right: 20px;
            margin-top: 40px;
            border-radius: 0.50rem;
        }
        span{
            width: 70px;
            height: 40px;
            margin-top: 45px;
            background-size: 100% 100%;
            background: linear-gradient(-45deg, #F2F2F2, #FAFAFA, #F2F2F2, #FAFAFA);
            animation-name: ${animationImg};
            animation-duration: 2s;
            animation-iteration-count: infinite;
            border-radius: 0.50rem;
        }

    }
    p{
        font-size: 13px;
        padding: 0.5rem;
    }
`

export default { Container, Content, ProductData }