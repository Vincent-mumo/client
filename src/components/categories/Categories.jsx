import React from './Categories.css'
import { Link } from "react-router-dom"

const Categories = () => {
    return ( 
        <div className = "categories" >
        <div className = "categoryItem" >
        < img src = "https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className = "categoryImage" / >
        <div className = "itemDesc" >
        < h3 className = "descName" > Gents </h3>
        <Link to = "/products/gents"> <button className = "categoryButton" > Shop Now </button></Link >
        </div>
     </div> 

         <div className = "categoryItem" >
        < img src = "https://images.pexels.com/photos/2995309/pexels-photo-2995309.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className = "categoryImage" / >
        <div className = "itemDesc">
        <h3 className = "descName"> Kids </h3> 
        <Link to = "/products/kids"> <button className = "categoryButton"> Shop Now </button> </Link >
        </div> 
        </div>
         <div className = "categoryItem">
        <img src = "https://images.pexels.com/photos/2874328/pexels-photo-2874328.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "" className = "categoryImage" / >
        <div className = "itemDesc">
        <h3 className = "descName"> Ladies </h3> 
        <Link to = "/products/ladies"> <button className = "categoryButton" > Shop Now </button> </Link > 
        </div> 
        </div> 
        </div>
    )
}

export default Categories