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


const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Categories/>
            <Products/>
            <Banner/>
            <Trend/>
            <Discount/>
            <Insta/>
            <Footer/>
            {/* <h1 style = {{textAlign:'center', height:"500px"}}>Under Construction!!!</h1> */}

        </div>
    )
}
export default Home;