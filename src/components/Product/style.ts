"use client"
import styled from 'styled-components'
import { darken } from 'polished'


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
        background-color: var(--blue);
        height: 30px;
        border-radius: 0 0 0.50rem 0.50rem;
        color: #FFF;
        font-weight: 700;
        font-size: 17px;

        img{
            margin-right: 10px;
            width: 16px;
            height: 16px;
            line-height: 20px;
        }

        &:hover{
            background-color: ${darken(0.1, '#0F52BA')};
        }
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
    img{
        width: 130px;
        height: 130px;
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
    
    div{
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        text-align: left !important; 
        h3{
            max-width: 140px;
            font-size: 18px;
            line-height: 20px;
            font-weight: 400;
            text-align: left;
        }
        span{
            width: 70px;
            height: 40px;
            text-align: center;
            font-weight: bold;
            background-color: var(--background-price);
            color: white;
            line-height: 40px;
            border-radius: 0.50rem;
        }

    }
    p{
        font-size: 13px;
        padding: 0.5rem;
    }
`

export default { Container, Content, ProductData }