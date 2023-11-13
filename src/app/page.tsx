"use client"
import { Header } from "@/components/Header";
import { Container } from "./GlobalStyle";
import { Dashboard } from "@/components/Dashboard";
import { config } from 'dotenv'
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/context/UseCartContext";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

config()


export default function Home() {
  return (
    <Container>
      <CartProvider>
        <Header />
        <Dashboard />
        <Cart />
      </CartProvider>
      <ToastContainer/>
    </Container>
  )
}
