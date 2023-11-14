"use client"

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: center;
`


const Grid = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;


    @media (max-width: 1200px) {
        max-width: 800px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 850px) {
        max-width: 600px;
        grid-template-columns: 1fr 1fr;
    }
`


export default { Container, Grid }