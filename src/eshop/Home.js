import React from 'react'
import Categories from './categories'
import Navbar from './Navbar'
import Products from './Products'
import './css/style.css'
import Banner from './banner'
import Trend from './Trend'
import Discount from './Dicount'
import Footer from './Footer'
import Insta from './Instagram'
import GuestLayout from './comp/GuestLayout'


const Home = () =>{
    return(
       

         <>
            <Categories/>
            <Products/>
            <Banner/>
            <Trend/>
            <Discount/>
            <Insta/>
          
            {/* <h1 style = {{textAlign:'center', height:"500px"}}>Under Construction!!!</h1> */}
</>
         
    )
}
export default Home;