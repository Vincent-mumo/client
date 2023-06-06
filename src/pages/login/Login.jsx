import "./Login.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom"
import {login} from "../../redux/apiCalls"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  //to be used when dispatching actions to the redux store
  const dispatch = useDispatch()

  //fetching user from store
  const {isFetching,error} = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch,{username,password})
  }




  return (
   <>
   <Navbar/>
     <div className="login">
      <div className="loginContainer">
        <form className="loginForm">
          <div className="formContainer">
            <label htmlFor="" className="loginLabel">Username</label>
            <input type="text" placeholder="enter username" className="loginInput" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="formContainer">
            <label htmlFor="" className="loginLabel">Password</label>
            <input type="password" placeholder="enter password" className="loginInput" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          {error && <span className="error">wrong credentials</span>}
          <button className="loginButton" onClick={handleClick} disabled={isFetching}>Login</button>
        </form>
        <span>or you don't have an account ?</span>
          <Link to="/register" className="link"><button className="loginButton">Create account</button></Link>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Login

