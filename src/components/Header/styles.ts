"use client"
import styled from 'styled-components'

const Container = styled.header`
    width: 100%;
    height: 100px;
    background-color: var(--blue);
`

const Content = styled.div`
    max-width: 1472px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: inherit;
    margin: 0 auto;
    padding: 0 1rem;

`

const LogoContainer = styled.div`
    width: 200px;
    height: inherit;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;

    & > img:last-child{
        position: relative;
        top: 5px;
    }
`

export default { Container, Content, LogoContainer }