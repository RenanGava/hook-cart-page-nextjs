"use client"
import S from "./styles";
import logoMSK from '../../../public/MKS.png'
import logoSIS from '../../../public/Sistemas.png'
import Image from "next/image";
import { ButtonCart } from "../ButtonCart";



export function Header(){

    return(
        <S.Container>
            <S.Content>
                <S.LogoContainer>
                    <Image src={logoMSK} alt=""/>
                    <Image src={logoSIS} alt=""/>
                </S.LogoContainer>
                <ButtonCart/>
            </S.Content>
        </S.Container>
    )
}