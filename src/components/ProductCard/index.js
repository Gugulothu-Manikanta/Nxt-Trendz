<<<<<<< HEAD
import {Link} from 'react-router-dom'

=======
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
import './index.css'

const ProductCard = props => {
  const {productData} = props
<<<<<<< HEAD
  const {title, brand, imageUrl, rating, price, id} = productData

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}
export default ProductCard
=======
  const {title, brand, imageUrl, rating, price} = productData

  return (
    <li className="product-item">
      <img src={imageUrl} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {brand}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  )
}
export default ProductCard
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
