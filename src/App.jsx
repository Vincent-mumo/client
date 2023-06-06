import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Cart from "./components/cart/Cart"
import ProductsList from './pages/productsList/ProductsList';
import { useSelector } from 'react-redux';

function App() {
    const user = useSelector((state) => state.user.currentUser);

    return ( 
        <div className = "app" >
        <BrowserRouter >
        <Routes>
        <Route path = '/' element = {<Home/>}/> 
        <Route path = '/products/:category' element = {<ProductsList/>}/> 
        <Route path = '/register' element = {<Register/>}/>
         <Route path = '/login' element = {user ? <Navigate to="/"/> : <Login/>}/> 
         <Route path = '/cart' element = {<Cart/> }/> 
         </Routes>
        </BrowserRouter> 
        </div>
    );
}

export default App;