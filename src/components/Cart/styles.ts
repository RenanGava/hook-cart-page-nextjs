import styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'


interface ModalProps {
    $isOpen: boolean
}


const Modal = styled.div<ModalProps>`
    position: absolute;
    right: 0;
    top: 0;
    max-width: 600px;
    width: 100vh;
    display: ${(props) => props.$isOpen ? 'flex' : 'none'};
    height: 100%;
    background-color: var(--blue);
    flex-direction: column;
    box-shadow: 2px 1px 10px 1px #000;
`

const HeaderModal = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    margin-top: 1rem;

    h1{
        max-width: 200px;
        color: #FFF;
    }
    button{
        width: 38px;
        height: 38px;
        border-radius: 38px;
        font-size: 1.2rem;
        font-weight: 400;
        background-color: #000;
        color: #FFF;
        border: 0;

        &:hover{
            background-color: ${lighten(0.2, '#000')};
        }
    }

`

const ProductsContainer = styled.div`
    margin-top: 30px;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    }


    div.cart{
        max-width: 500px;
        width: calc(100% - 20px);
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: left;
        background-color: #FFF;
        border-radius: 0.50rem;
        margin-top: 1.3rem;
        position: relative;
        img{
            width: 100px;
            height: 100px;
            margin-right: 1rem;
            border-top-left-radius: 0.50rem;
            border-bottom-left-radius: 0.50rem;
        }

        h3.name{
            width: 200px;
            font-size: 1rem;
            text-align: center;
            text-transform: uppercase;
        }
        h3:last-child{
            width: 200px;
            font-size: 1rem;
            text-align: center;
            text-transform: uppercase;
        }
    }
`

const ButtonClose = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 25px;
    right: -10px;
    top: -10px;
    border: 0;
    background-color: #000;
    position: absolute;
    color: #FFF;

`

const CountProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    width: 90px;
    height: 30px;
    margin-left: 20px;
    border-radius: 0.50rem;
    border: 1px solid #ccc;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 40px;
        font-size: 1.1rem;
        border: 0;
        background-color: transparent;

        &:first-child{
            border-top-left-radius: 0.50rem;
            border-bottom-left-radius: 0.50rem;
        }

        &:last-child{
            border-top-right-radius: 0.50rem;
            border-bottom-right-radius: 0.50rem;
        }
    }
    span{
        line-height: 30px;
        font-size: 1rem;
        width: 50px;

        &::after{
            content: '';
            font-size: 20px;
            border-left: 1px solid #000;
            background-color: #000;
            margin-left: 10px;
        }
        &::before{
            content: '';
            font-size: 20px;
            text-align: center;
            border-left: 1px solid #000;
            margin-right: 10px;
            background-color: #000;
        }
    }
`


const ContainerFooter = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    


    div{
        padding: 0 3rem;
        height: 100px;
        display: flex;
        justify-content: space-between;
        color: #FFF;
    }
    button{
        height: 100px;
        font-size: 2rem;
        font-weight: 700;
        background-color: #000;
        color: #FFF;
        border: 0;
    }
`

export default { 
    Modal,
    HeaderModal, 
    ProductsContainer, 
    CountProduct,
    ButtonClose,
    ContainerFooter
}