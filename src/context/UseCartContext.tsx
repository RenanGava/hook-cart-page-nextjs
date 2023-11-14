import { ReactNode, createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'



interface CartContextProps {
    handleOpenModal(): void
    isOpen: boolean
    cart: ICartProductProps[]
    handleAddProductCart(product: IHandleAddProductProps): void
    handleRemoveProductCart(id: number): void
    handleToAddAmount(id: number): void
    handleSubtractAmount(id: number): void
}

const CartContext = createContext({} as CartContextProps)


interface CartProviderProps {
    children: ReactNode
}

interface ICartProductProps {
    id: number,
    name: string,
    photo: string,
    brand: string,
    description: string,
    price: number,
    amount: number
}

type IHandleAddProductProps = Omit<ICartProductProps, 'amount'>

function CartProvider({ children }: CartProviderProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [cart, setIsCart] = useState<ICartProductProps[]>([] || null)

    function handleOpenModal() {
        setIsOpen((prevState) => !prevState)
    }

    function handleAddProductCart({ id, brand, description, name, photo, price }: IHandleAddProductProps) {


        try {
            const findProduct = cart.find(product => product.id === id)

            if (!findProduct) {

                const addProductCart = {
                    id: id,
                    name: name,
                    photo: photo,
                    brand: brand,
                    description: description,
                    price: price,
                    amount: 1
                }

                setIsCart([
                    ...cart,
                    addProductCart
                ])
            }
            else {
                const updateCart = cart.filter(product => findProduct.id != product.id)
                findProduct.amount += 1
                setIsCart([
                    findProduct,
                    ...updateCart
                ])
                
            }

        } catch (e) {
            toast.error("Product Exist")


        }
    }

    function handleRemoveProductCart(id: number) {

        try {
            const updatedCart = [...cart]
            const productIndex = updatedCart.findIndex(product => product.id === id)

            if (productIndex >= 0) {
                updatedCart.splice(productIndex, 1)
                setIsCart(updatedCart)
            }
            else {
                throw Error("Product Is not Find")
            }
        } catch (e: Error | unknown) {
            toast.error("Erro em Remover o Produto")
        }
    }

    function handleToAddAmount(id: number) {

        const updatedProductCart = cart.map(product => {

            if (product.id === id) {
                product.amount += 1

                return product
            }
            else {
                return product
            }
        })

        setIsCart([...updatedProductCart])
    }

    function handleSubtractAmount(id: number) {
        const updatedProductCart = cart.map(product => {

            if (product.id === id) {
                product.amount -= 1

                return product
            }
            else {
                return product
            }
        })

        setIsCart([...updatedProductCart])
    }


    return (
        <CartContext.Provider value={{
            handleOpenModal,
            handleAddProductCart,
            handleRemoveProductCart,
            handleToAddAmount,
            handleSubtractAmount,
            isOpen,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}


function useCartContext() {

    return useContext(CartContext)
}

export { CartProvider, useCartContext }