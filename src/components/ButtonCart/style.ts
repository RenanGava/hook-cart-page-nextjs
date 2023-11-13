"use client"
import styled from 'styled-components'
import { darken } from 'polished'

const Button = styled.button`
    border: 0;
    background: #FFF;
    width: 80px;
    height: 45px;
    border-radius: 0.40rem;
    padding-right: 15px;
    text-align: center;
    &:hover{
        background-color: ${darken(0.1, '#FFF')};
    }
`

const Content = styled.div`
    width: 100%;
`

const Count = styled.span`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
    margin-bottom: 10px;
`


export default { Button, Content, Count }