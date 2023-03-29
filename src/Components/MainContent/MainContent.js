import React from 'react'
import Card from '../Card/Card';
import CategoryBanner from '../CategoryBanner/CategoryBanner';
import Header from '../Header/Header';
import './MainContent.scss';
import { MdShare } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
export const MainContent = () => {
  let products = [{
    "id": 1,
    "name": "Ecolab - Power Fusion",
    "price": 49.82,
    "image": "http://dummyimage.com/70x79.png/cc0000/ffffff"
  }, {
    "id": 2,
    "name": "Squash - Pepper",
    "price": 39.61,
    "image": "http://dummyimage.com/70x88.png/ff4444/ffffff"
  }, {
    "id": 3,
    "name": "Bread - White, Unsliced",
    "price": 67.68,
    "image": "http://dummyimage.com/70x86.png/ff4444/ffffff"
  }, {
    "id": 4,
    "name": "Chicken - Whole Roasting",
    "price": 72.21,
    "image": "http://dummyimage.com/70x91.png/5fa2dd/ffffff"
  }, {
    "id": 5,
    "name": "Chocolate - White",
    "price": 55.13,
    "image": "http://dummyimage.com/70x87.png/ff4444/ffffff"
  }, {
    "id": 6,
    "name": "Pomegranates",
    "price": 14.62,
    "image": "http://dummyimage.com/70x89.png/cc0000/ffffff"
  }, {
    "id": 7,
    "name": "Sauce - Fish 25 Ozf Bottle",
    "price": 15.09,
    "image": "http://dummyimage.com/70x75.png/5fa2dd/ffffff"
  }, {
    "id": 8,
    "name": "Mcguinness - Blue Curacao",
    "price": 75.54,
    "image": "http://dummyimage.com/70x76.png/ff4444/ffffff"
  }, {
    "id": 9,
    "name": "Yeast Dry - Fermipan",
    "price": 64.39,
    "image": "http://dummyimage.com/70x87.png/5fa2dd/ffffff"
  }, {
    "id": 10,
    "name": "Ranchero - Primerba, Paste",
    "price": 11.70,
    "image": "http://dummyimage.com/70x88.png/cc0000/ffffff"
  }, {
    "id": 11,
    "name": "Bar Mix - Pina Colada, 355 Ml",
    "price": 34.86,
    "image": "http://dummyimage.com/70x73.png/cc0000/ffffff"
  }, {
    "id": 12,
    "name": "Chips Potato Reg 43g",
    "price": 59.99,
    "image": "http://dummyimage.com/70x70.png/dddddd/000000"
  }, {
    "id": 13,
    "name": "Schnappes - Peach, Walkers",
    "price": 91.06,
    "image": "http://dummyimage.com/70x97.png/cc0000/ffffff"
  }, {
    "id": 14,
    "name": "Chocolate - Milk",
    "price": 83.75,
    "image": "http://dummyimage.com/70x71.png/cc0000/ffffff"
  }, {
    "id": 15,
    "name": "Chutney Sauce - Mango",
    "price": 73.15,
    "image": "http://dummyimage.com/70x79.png/5fa2dd/ffffff"
  }, {
    "id": 16,
    "name": "Ham - Cooked Bayonne Tinned",
    "price": 76.88,
    "image": "http://dummyimage.com/70x100.png/5fa2dd/ffffff"
  }, {
    "id": 17,
    "name": "Rabbit - Legs",
    "price": 99.73,
    "image": "http://dummyimage.com/70x79.png/cc0000/ffffff"
  }, {
    "id": 18,
    "name": "Dr. Pepper - 355ml",
    "price": 26.33,
    "image": "http://dummyimage.com/70x70.png/5fa2dd/ffffff"
  }, {
    "id": 19,
    "name": "Soup - Canadian Pea, Dry Mix",
    "price": 98.18,
    "image": "http://dummyimage.com/70x94.png/cc0000/ffffff"
  }, {
    "id": 20,
    "name": "Pate - Cognac",
    "price": 19.29,
    "image": "http://dummyimage.com/70x79.png/ff4444/ffffff"
  }, {
    "id": 21,
    "name": "Radish",
    "price": 64.93,
    "image": "http://dummyimage.com/70x84.png/5fa2dd/ffffff"
  }, {
    "id": 22,
    "name": "Mushroom - Portebello",
    "price": 17.73,
    "image": "http://dummyimage.com/70x96.png/ff4444/ffffff"
  }, {
    "id": 23,
    "name": "Tarragon - Fresh",
    "price": 78.81,
    "image": "http://dummyimage.com/70x79.png/cc0000/ffffff"
  }, {
    "id": 24,
    "name": "Juice - Apple, 500 Ml",
    "price": 44.54,
    "image": "http://dummyimage.com/70x82.png/cc0000/ffffff"
  }, {
    "id": 25,
    "name": "Juice - Apple, 500 Ml",
    "price": 11.57,
    "image": "http://dummyimage.com/70x93.png/5fa2dd/ffffff"
  }]
  
  return (
    <div className='main-content'>
        <Header/>
        <div className='category-card'>
          <CategoryBanner />
          <div className='row'>
            {products.map(product => 
              <Card product={product} key={product.id}/>
            )}
          </div>
        </div>
        <div className="floating-btn-container">
          <button className="share-btn"><MdShare />  <span className='text'>Share</span></button>
          <button className="notes-btn"><SlPencil /> <span className='text'>Your Notes</span></button>
        </div>
    </div>
  )
}
