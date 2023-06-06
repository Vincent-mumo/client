import { useState } from "react"
import "./Register.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import {publicRequest} from "../../utils/requestMethods"

const Register = () => {
  const navigate = useNavigate()
  //selecting file for use as profile picture
  const [file,setFile] = useState("")
  const [customer,setCustomer] = useState({
    username:"",
    password:"",
    phoneNo:""
  })

  //function handling changes in the input fields
  const handleChange = (e) => {
    e.preventDefault()
    setCustomer((prev) => {
      return {...prev,[e.target.name]:e.target.value}
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("file",file)
    data.append("upload_preset","upload")
   
    try{
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/vmumo/image/upload",data)
      const {url} = uploadRes.data
      const newCustomer = {...customer,img:url}
      await publicRequest.post("customerAuth/register",newCustomer)
      navigate("/")
      
      
    }catch(err){
      console.log(err)
    }
  }

  

  //fun

  
  
  
  return (
    <>
    <Navbar/>
    <div className="register">
      <div className="registerContainer">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" placeholder="Enter Name" onChange={handleChange}/>
          <label>Password:</label>
          <input type="password"  name="password" placeholder="Enter password" onChange={handleChange}/>
          <label>Phone No:</label>
          <input type="text" name="phoneNo" placeholder="Enter Phone No." onChange={handleChange}/>
          <input type="hidden" name="from" value="fromSite"/>
          <label htmlFor="file" className="uploader">click here to upload profile</label>
          <img src={file ? URL.createObjectURL(file) : "https://images.pexels.com/photos/14157833/pexels-photo-14157833.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" className="profilePicture" />
          <input type="file" id="file" onChange={e=> setFile(e.target.files[0])}  style={{display:"none"}}/>
          <button className="registerButton" type="submit">Create Account</button>
          <span>or do you have an account?</span>
        <Link to="/login"><button className="logginRedirectButton">Login</button></Link>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register