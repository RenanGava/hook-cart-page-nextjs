import { useCartContext } from '@/context/UseCartContext';
import { useState, useEffect } from 'react'
import S from './styles'


export function Cart() {

    const { 
        isOpen, 
        handleOpenModal, 
        cart, 
        handleRemoveProductCart, 
        handleToAddAmount ,
        handleSubtractAmount
    } = useCartContext()
    const [total, setTotal] = useState(0)


    useEffect(() =>{
        const totalPriceInCart = cart.reduce( (acc, product) => {
            return acc + (product.price * product.amount)
        }, 0)

        setTotal(totalPriceInCart)
    },[cart])


    return (
        <S.Modal
            $isOpen={isOpen}
        >
            <S.HeaderModal>
                <h1>Carrinho <br />de compras</h1>
                <button
                    onClick={handleOpenModal}
                >
                    X
                </button>
            </S.HeaderModal>

            <S.ProductsContainer>
                {cart.map(product => {
                    return (
                        <div className='cart' key={product.id}>
                            <S.ButtonClose
                                onClick={() => handleRemoveProductCart(product.id)}
                            >
                                X
                            </S.ButtonClose>
                            <img src={product.photo} />
                            <h3 className='name'>{product.name}</h3>
                            <S.CountProduct>
                                <button onClick={() => handleSubtractAmount(product.id)}>-</button>
                                <span>{product.amount}</span>
                                <button onClick={() => handleToAddAmount(product.id)}>+</button>
                            </S.CountProduct>
                            <h3>R${product.price.toString().split('.')[0]}</h3>
                        </div>
                    )
                })}
            </S.ProductsContainer>

            <S.ContainerFooter>
                <div>
                    <h1>Total:</h1>
                    <h1>R${total.toString().split('.')[0]}</h1>
                </div>
                <button>Finalizar Compra</button>
            </S.ContainerFooter>
        </S.Modal>
    )
}