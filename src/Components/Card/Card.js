import React,{useContext} from 'react'
import './Card.scss';
import CartContext from '../../store/cart-context';

const Card = ({product}) => {
  const addToCartContext = useContext(CartContext);
  const totalAmount = `${addToCartContext.totalAmount.toFixed(2)}`
  const addToCart = () =>{
    const enteredAmount = 1;
    addToCartContext.addItem(
      {
        id: product.id,
        name: product.name,
        amount:enteredAmount,
        price:product.price,
        image: product.image
      }
    )
  }
  return (
    <div className='card-container' onClick={addToCart}>
      <div className='card-wrapper'>
        <div className="card-img-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="card-text-container">
          <h3 className='card-title'>{product.name}</h3>
          <p className='card-price'>${product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
