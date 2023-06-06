import  Slider  from 'infinite-react-carousel'
import { products } from '../../data'
import "./ProductsSlider.css"

const ProductsSlider = () => {
  return (
    <div className="productsSlider">
        <Slider autoplay arrows={false}>
        {products.map((product) => (
          <img src={product} className="sliderImage" key={product}/>
        ))}
        </Slider>
    </div>
  )
}

export default ProductsSlider