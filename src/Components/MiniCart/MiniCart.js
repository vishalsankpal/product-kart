import React,{useState,useContext,useRef} from 'react'
import CartContext from '../../store/cart-context';
import { BsCart } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import './MiniCart.scss';
import {useReactToPrint} from 'react-to-print';
const MiniCart = () => {
  const componentRef = useRef();
  const miniCartContext = useContext(CartContext);
  const [minCart, setMinCart] = useState(false);
  const numberOfItems = miniCartContext.items.reduce((acc, item) =>acc + item.amount,0);
  const totalAmount = `${miniCartContext.totalAmount.toFixed(2)}`
  const withTax = (totalAmount * (10/100)).toFixed(2)
  const minicartSwitch = () => {
    if(minCart){
      setMinCart(false)
    }else{
      setMinCart(true)
    }
  }
  const cartItemRemoveHandler = (id) => {
    //miniCartContext.removeItem(id)
    miniCartContext.removeItem(id);
  }
  const cartItemAddHandler = (item) => {
    miniCartContext.addItem({...item, amount: 1});
  }
  const printBill = useReactToPrint({
    content:()=>componentRef.current,
    documentTitle:'Bill'
  })
  return (
    <div className={`mini-cart-container ${minCart ? 'active' : ''}`}>
      <div className="mini-cart-icon-container" onClick={minicartSwitch}>
        <BsCart />
        {numberOfItems}
      </div>
      <div className="mini-cart-wrapper">
        <div className="mini-cart-header">
          <div className="mini-cart-title-container">
            <h3 className='mini-cart-title'>My Order</h3>
            <p className='mini-cart-sub-title'>Take out</p>
          </div>
          <div className="mini-cart-close-container" onClick={minicartSwitch}>
            <IoCloseOutline />
          </div>
        </div>
        {
          miniCartContext.items.length > 0 &&
          < >
            <div className="mini-cart-body">
              <ul>
                {miniCartContext.items.map(cart=>  
                  <li className="mini-cart-item" key={cart.id}>
                    <div className="mini-cart-item-wrapper">
                      <div className="mini-cart-item-img-wrapper">
                        <img src={cart.image} alt={cart.name} />
                      </div>
                      <div className="mini-cart-item-actions-wrapper">
                        <div className="mini-cart-item-title-container">
                          <h3 className='title'>{cart.name}</h3>
                          <div className="dots">..</div>
                        </div>
                        <div className="mini-cart-item-price-quantity-container">
                          <p className='mini-cart-price'>{cart.price}</p>
                          <div className="mini-cart-qty-wrapper">
                            <button  className="reduce-counters" onClick={cartItemRemoveHandler.bind(null, cart.id)}>-</button>
                            <input className='qty-input' type='text' value={cart.amount} min={1} step={1} pattern="^(0|[1-9][0-9]*)$"/>
                            <button  className="increase-counters" onClick={cartItemAddHandler.bind(null,cart)}>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className='mini-cart-footer'>
              <div className='mini-cart-subtotal'>
                <p className="subtotal-text">Subtotal</p>
                <p className="subtotal-amount">${totalAmount}</p>
              </div>
              <div className='mini-cart-subtotal'>
                <p className="subtotal-text">Tax(10%)</p>
                <p className="subtotal-amount">${withTax}</p>
              </div>
              <div className="dividers-subtotal"></div>
              <div className='mini-cart-total'>
                <p className="subtotal-text">Total</p>
                <p className="subtotal-amount">${(Number(totalAmount) + Number(withTax)).toFixed()}</p>
              </div>
              
              <div className='print-bill'>
                <button className='print-bill-btn' onClick={printBill}>Print Bills</button>
              </div>
            </div>
          </>
        }
        {
          miniCartContext.items.length < 1 &&
          <div className="empty-cart-context">
            <h2>Your Cart is Empty.</h2>
          </div>
        }
        
      </div>
      <div className="print-bill-data" ref={componentRef}>
        {
          miniCartContext.items.map(item =>
            <>
              <h2>Prodcut Name: {item.name}</h2>
              <h2>Prodcut Qty: {item.amount}</h2>
              <h2>Prodcut price: {item.amount} * {item.price}</h2>
              <br />
              <h2>Total:{(Number(totalAmount) + Number(withTax)).toFixed()}</h2>
            </>
          )
        }
      </div>
    </div>
  )
}

export default MiniCart;
