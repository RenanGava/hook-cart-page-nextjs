import { useCartContext } from '@/context/UseCartContext';
import KartIcon from '../../../public/Kart.png'
import S from './style'
import Image from "next/image";
import { useEffect } from 'react';


export function ButtonCart() {
    const { handleOpenModal, cart } = useCartContext()

    
    return (
        <S.Button
            onClick={handleOpenModal}
        >
            <S.Content>
                <Image src={KartIcon} alt="" />
                <S.Count>{cart.length}</S.Count>
            </S.Content>
        </S.Button>
    )
}