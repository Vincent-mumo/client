import  "./Orders.css"
import {useSelector} from "react-redux"
import { useEffect, useState } from "react"
import { publicRequest } from "../../utils/requestMethods"
import close from "../../images/close.png"

const Orders = ({closed}) => {
const [orders,setOrders] = useState([])
 //finding currentUser 
 const currentUser = useSelector(state => state.user.currentUser)
 
 //finding currentUser orders 
 useEffect(() => {
  const customerOrders = async () => {
    try{
      const res = await publicRequest.get(`orders/find/${currentUser._id}`)
      setOrders(res.data)

    }catch(err){}
  }
  customerOrders()
 },[currentUser])

 const Button = ({type}) => {
  return <button className={"widgetLgButton " + type}>{type}</button>
 }

 const isMobile = window.matchMedia("(max-width:450px)").matches

  return (
    <div className="ordersC">
      {isMobile && <img src={close} alt="" className="close" onClick={closed}/>}
      {orders.map((order)=> (
        <div className="ordersContainer">
        {!isMobile && (
          <div className="orderCategory">
              <span className="specificationTitle">order ID.</span>
              <span className="specification">{order._id}</span>
          </div>
         )}
        <div className="orderCategory">
           <span className="specificationTitle">Amount.</span>
           <span className="specification">{order.amount}</span>
        </div>
        <div className="orderCategory">
           <span className="specificationTitle">status.</span>
           <span><Button type={order.status}/></span>
        </div>
        <div className="orderCategory">
           {isMobile ? <span className="specificationTitle">Date</span>: <span className="specificationTitle">Created On</span>}
           <span className="specification">{new Date(order.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Orders