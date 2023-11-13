"use client"
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #FFFFFF;
        --blue: #0F52BA;

        --background-price:#373737;
        --text:#2C2C2C;

        --footer:#EEEEEE;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    // font-size padrão 16px (desktop)
    // fazendo o padrão de media querys abaixo utilizando porcentagem
    // quando utilizamos a medida REM, ela se adequa ao tamanho da página.
    // isso visando a acessibilidade da aplicação.
    html{
        @media (max-width: 1000px) {
            font-size: 93.75%; // 16px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 15px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }
`


export const Container = styled.main`
    max-width: 1920px;
    height: 100vh;
`