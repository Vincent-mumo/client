import "./ProductsList.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ProductsSlider from "../../components/productsSlider/ProductsSlider"
import Products from "../../components/products/Products"
import ProductsAutro from "../../components/productsAutro/ProductsAutro"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const ProductsList = () => {

 //using location hook to extract the category passed
 const location = useLocation()
 const cat = location.pathname.split("/")[2]
 console.log(cat)
 
 //filtering state to be used in filtering products
 const [filters,setFilters] = useState({})

 //sorting state to be used in sorting products
 const [sort,setSort] = useState("newest")

 //filtering function
 const handleFilters = (e) => {
  const value = e.target.value
  setFilters({...filters,[e.target.name]:value})
 }

 const isMobile = window.matchMedia("(max-width:450px)").matches





  return (
    <>
    <Navbar/>
    <div className="productsPage">
      <ProductsSlider/>
      { isMobile ? <div className="mobiled">
         <div className="topmen">
          <>
          {cat==="gents" && <div className="typeSelect">
        <h1 className="type">type</h1>
       <select name="type" onChange={handleFilters}>
          <option>Airforce</option>
          <option>AirMax</option>
          <option>Official</option>
          <option>Sports</option>
          <option>Loofer</option>
        </select>
      </div>}
      <div className="topwomen">
      {cat ==="ladies" &&<div className="typeSelect">
        <h1 className="type"></h1>
       <select name="type" onChange={handleFilters}>
          <option>Rubber</option>
          <option>High Heels</option>
          <option>Official</option>
          <option>Classic</option>
          <option>Sports</option>
        </select>
      </div>}
      </div>
      {cat ==="kids" &&<div className="typeSelect">
        <h1 className="type"></h1>
       <select name="type" onChange={handleFilters}>
          <option>Schooling</option>
          <option>Sunday Best</option>
          <option>Opens</option>
          <option>Sports</option>
          <option>Rubber</option>
          <option>Sneaker</option>
        </select>
      </div>}
      <div className="priceSelect">
      <h1 className="price">Price</h1>
       <select onChange={(e) => setSort(e.target.value)}>
           <option value="newest">Newest</option>
          <option value="asc">Price (asc)</option>
          <option value="desc">Price (desc)</option>
        </select>
      </div>
          </>
         </div>
         <div className="bottom">
         <div className="sizeSelect">
        <h1 className="size" onChange={handleFilters}>size</h1>
        <select name="size" onChange={handleFilters}>
          <option>43</option>
          <option>42</option>
          <option>41</option>
          <option>40</option>
          <option>39</option>
          
        </select>
      </div>
      <div className="colorSelect">
        <h1 className="color">color</h1>
       <select name="color" onChange={handleFilters}>
          <option>White</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Black</option>
          <option>Brown</option>
        </select>
      </div>
         </div>
      </div>
      :
      <div className="productSelect">
      {cat==="gents" && <div className="typeSelect">
        <h1 className="type">type</h1>
       <select name="type" onChange={handleFilters}>
          <option>Airforce</option>
          <option>AirMax</option>
          <option>Official</option>
          <option>Sports</option>
          <option>Opens</option>
          <option>Sneaker</option>
        </select>
      </div>}
      {cat ==="ladies" &&<div className="typeSelect">
        <h1 className="type">type</h1>
       <select name="type" onChange={handleFilters}>
          <option>High Heels</option>
          <option>Official</option>
          <option>Classic</option>
          <option>Sports</option>
          <option>Rubber</option>
          <option>Dolly</option>
        </select>
      </div>}
      {cat ==="kids" &&<div className="typeSelect">
        <h1 className="type">type</h1>
       <select name="type" onChange={handleFilters}>
          <option>Schooling</option>
          <option>Sunday Best</option>
          <option>Opens</option>
          <option>Sports</option>
          <option>Rubber</option>
        </select>
        
      </div>}
      <div className="sizeSelect">
        <h1 className="size" onChange={handleFilters}>size</h1>
        <select name="size" onChange={handleFilters}>
          <option>43</option>
          <option>42</option>
          <option>41</option>
          <option>40</option>
          <option>39</option>
          <option>38</option>
          <option>37</option>
          <option>36</option>
          <option>35</option>
          <option>34</option>
        </select>
      </div>
      <div className="colorSelect">
        <h1 className="color">color</h1>
       <select name="color" onChange={handleFilters}>
           <option>White</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Black</option>
          <option>Brown</option>
        </select>
      </div>
      <div className="priceSelect">
      <h1 className="price">Price</h1>
       <select onChange={(e) => setSort(e.target.value)}>
           <option value="newest">Newest</option>
          <option value="asc">Price (asc)</option>
          <option value="desc">Price (desc)</option>
        </select>
      </div>
    </div>}
    </div>
    <Products cat={cat} filters={filters} sort={sort}/>
    <ProductsAutro/>
    <Footer/>
    </>
  )
}

export default ProductsList