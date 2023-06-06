import "./Footer.css"
import Cash from "../../images/dollar.png"
import Bitcoin from "../../images/bitcoin.png"
import Mpesa from "../../images/mpesa.png"
import Visa from "../../images/visa.png"
import Twitter from "../../images/twitter.png"
import Facebook from "../../images/facebook.png"
import Instagram from "../../images/instagram.png"
import Whatsapp from "../../images/whatsapp.png"
import DogeCoin from "../../images/dogecoin.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="fLeft">
          <h1 className="fTitle">popular brands </h1>
          <ul className="brands">
            <li className="brand">Adidas</li>
            <li className="brand">Nike</li>
            <li className="brand">Vans</li>
            <li className="brand">Puma</li>
            <li className="brand">Sketchers</li>
            <li className="brand">Under Armour</li>
            <li className="brand">New Balance</li>
            <li className="brand">Converse</li>
          </ul>
        </div>
        <div className="fCenter">
          <h1 className="fTitle">Payment methods allowed</h1>
          <div className="paymentMethods">
            <div className="paymentMethod">
              <img src={Mpesa} alt="" className="methodImage" />
              <span className="methodName">M-pesa</span>
            </div>
            <div className="paymentMethod">
              <img src={Cash} alt="" className="methodImage" />
              <span className="methodName">Cash on Delivery</span>
            </div>
            <div className="paymentMethod">
              <img src={Visa} alt="" className="methodImage" />
              <span className="methodName">Visa</span>
            </div>
            <div className="paymentMethod">
              <img src={Bitcoin} alt="" className="methodImage" />
              <span className="methodName">Bitcoin</span>
            </div>
            <div className="paymentMethod">
              <img src={DogeCoin} alt="" className="methodImage" />
              <span className="methodName">DogeCoin</span>
            </div>
          </div>
        </div>
        <div className="fRight">
          <h1 className="fTitle">Contact us through</h1>
          <div className="socialItems">
            <div className="socialItem">
              <img src={Twitter} alt="" className="socialImage" />
              <spa className="socialName">Lukuhub</spa>
            </div>
            <div className="socialItem">
              <img src={Facebook} alt="" className="socialImage" />
              <spa className="socialName">Lukuhub</spa>
            </div>
            <div className="socialItem">
              <img src={Whatsapp} alt="" className="socialImage" />
              <spa className="socialName">0746623911</spa>
            </div>
            <div className="socialItem">
              <img src={Instagram} alt="" className="socialImage" />
              <spa className="socialName">Lukuhub</spa>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span className="footerDesc">prepared by</span>
        <span className="footerTitle">vincent_dev</span>
        <span className="year">© 2023</span>
      </div>
    </div>
  )
}

export default Footer