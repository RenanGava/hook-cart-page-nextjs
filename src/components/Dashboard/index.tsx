"use client"
import { useEffect, useState } from 'react'
import { Product } from '../Product'
import S from './styled'
import axios from 'axios'
import { SkelletonComponent } from '../SkelletonComponent'


export interface ProductProps {
    id: number,
    name: string,
    photo: string,
    brand: string,
    description: string,
    price: number
}

export function Dashboard() {

    const [products, setProducts] = useState<ProductProps[]>()


    useEffect(() => {
        async function getData() {
            const response = await axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC")
            setProducts(response.data.products)
        }
        getData()
    }, [])

    console.log(products);
    return (
        <S.Container>

            <S.Grid>
                {products ? products.map(product => {
                    return (
                        <Product
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            brand={product.brand}
                            description={product.description}
                            photo={product.photo}
                            price={product.price}
                        />
                    )
                }) : <SkelletonComponent />}
            </S.Grid>

        </S.Container>
    )
}
