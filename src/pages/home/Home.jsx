import React from "./Home.css"
import Navbar from "../../components/navbar/Navbar"
import Slider from "../../components/slider/Slider"
import Categories from "../../components/categories/Categories"
import Products from "../../components/products/Products"
import Outro from "../../components/outro/Outro"
import Footer from "../../components/footer/Footer"

const Home = () => {
  const isMobile = window.matchMedia("(max-width:450px)").matches



  return (
    <div className="home">
      <Navbar/>
      <Slider/>
      { isMobile ? <div className="seperatory">
        <h2 className="separatorTitley">categories</h2>
      </div> :
      <div className="seperator">
        <h2 className="separatorTitle">categories</h2>
      </div>}
      <Categories/>
      { isMobile ? <div className="seperatory">
        <h2 className="separatorTitley">popular products</h2>
      </div> :
      <div className="seperator">
        <h2 className="separatorTitle">popular products</h2>
      </div>}
      <Products/>
      { isMobile ? <div className="seperatory">
        <h2 className="separatorTitley">how we operate</h2>
      </div> :
      <div className="seperator">
        <h2 className="separatorTitle">how we operate</h2>
      </div>}
      <Outro/>
      <Footer/>
    </div>
  )
}

export default Home