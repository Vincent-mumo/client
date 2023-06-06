import "./Cart.css"
import Plus from "../../images/plus.png"
import Minus from "../../images/minus.png"
import { useDispatch, useSelector } from "react-redux"
import {Link, useNavigate} from "react-router-dom"
import {removeProduct, resetCart} from "../../redux/cartRedux"
import {publicRequest} from "../../utils/requestMethods"

const Cart = ({click}) => {
  const cart = useSelector((state) => state.cart)
  const currentUser = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //removing product from cart
  const handleClick = (productId) =>{
    dispatch(removeProduct(productId))
  }


 const handleSubmit = (e) => {
  e.preventDefault()
   //submitting an order
    const createOrder = async () => {
      if(!currentUser){
        navigate("/register")
      }
      try{
        const res = await publicRequest.post("/orders",{
          customerId:currentUser._id,
          products:cart.products.map((item) => ({
            productId:item._id
          })),
          amount:cart.total
        })
      }catch(err){}
    }
    createOrder()
    dispatch(resetCart())
    click()

 }


  
  return (
    <div className="cart">
     {cart.products.map((product)=> (
       <div className="cartTop">
       <img src={product.image} alt="" className="cartImage" />
       <span className="productPrice">Ksh {product.price}</span>
       <h3 className="name">{product.name}</h3>
       <button id="cartButton" onClick={() =>handleClick(product.id)}>Remove</button>
     </div>
     ))}
      <hr className="cartLine" />
      <div className="cartBottom">
        <div className="summary">
          <div className="summaryContainer">
            <h1 id="summaryTitle">Order Summary</h1>
            <div className="subtotal">
              <span className="subtotalName">Sub Total</span>
              <span className="total">Ksh {cart.total}</span>
            </div>
            <div className="deliveryTime">
              <span className="deliveryTimeNameName">delivery time</span>
              <span className="deliveryTimeDays">3 days</span>
            </div>
            <div className="paymentUp">
            <h2 id="paymentMethod">Payment methods available</h2>
              <div className="mpesa">
              <span className="paymentType">M-Pesa</span>
              <span className="paymentDescription">comming soon</span>
              </div>
            </div>
            <div className="payment">
              <span className="paymentType">Cash on Delivery</span>
              <span className="paymentDescription">In use currently</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cartButtons">
        <button className="continueShopping"onClick={handleSubmit}>submit order</button>
        <button className="continueShopping" onClick={click}>Close Cart</button>
        </div>
    </div>
  )
}

export default Cart