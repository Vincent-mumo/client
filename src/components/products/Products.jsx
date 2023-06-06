import { useEffect, useState } from 'react'
import SingleProduct from '../singleProduct/SingleProduct'
import React from './Products.css'
import axios from "axios"

const Products = ({cat,filters,sort}) => {

  //declaring state variable and functin to be used in updating products retrieved from database
  const [products,setProducts] = useState([])

  //declaring state variable and function to be used when filtering has occurred
  const [filteredProducts,setFilteredProducts] = useState([])

  //useEffect for fetching products from db
  useEffect(() => {
    const getProducts = async () => {
      try{
        const response = await axios.get(
          cat ? `http://localhost:8800/api/products?category=${cat}` : "http://localhost:8800/api/products"
        )
        setProducts(response.data)

      }catch(err){
      }
    }
    getProducts()
  },[cat])

  //useEffect for handling the filtration process
  useEffect(()=> {
    cat && setFilteredProducts(
      products.filter((item) => Object.entries(filters).every(([key,value])=> item[key].includes(value)))
    )
  },[products,cat,filters])

  //useEffect for sorting process
  useEffect(() => {
    if(sort === "newest"){
      setFilteredProducts((prev) => [...prev].sort((a,b) => a.createdAt - b.createdAt))

    }else if (sort==="asc"){
      setFilteredProducts((prev) => [...prev].sort((a,b) => a.price - b.price))

    }else{
      setFilteredProducts((prev) => [...prev].sort((a,b) => b.price - a.price))
    }

  },[sort])
 






  return (
    <div className="products">
      {
        cat ? filteredProducts?.map((item) => <SingleProduct item={item} key={item.id}/>) :
        products.slice(0,20).map((item)=> <SingleProduct item={item} key={item.id}/>)}
    </div>
   
  )
}

export default Products