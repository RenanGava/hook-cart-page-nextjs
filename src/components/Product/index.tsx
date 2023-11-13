import S from './style'
import { ProductProps } from '../Dashboard'
import Image from 'next/image'
import Bag from '../../../public/BAG.png'
import { useCartContext } from '@/context/UseCartContext'


export function Product({ id, brand, description, name, price, photo }: ProductProps) {


    const { handleAddProductCart } = useCartContext()



    return (
        <S.Container>
            <S.Content>
                <img src={photo} alt='' />
                <S.ProductData>
                    <div>
                    <h3>{name}</h3>
                    <span>R${price.toString().split('.')[0]}</span>
                    </div>
                    <p>{description}</p>
                </S.ProductData>
            </S.Content>
            <button
                onClick={ () =>{
                    handleAddProductCart({id, brand, description, name, photo, price})
                }}
            >
                <Image src={Bag} alt=''/>
                Comprar
            </button>
        </S.Container>
    )
}