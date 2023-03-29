import React from 'react'
import MiniCart from '../MiniCart/MiniCart';
import './CategoryBanner.scss';
import { MdKeyboardArrowLeft } from "react-icons/md";
const CategoryBanner = () => {
  return (
    <div className='category-banner-container'>
      <div className='back-btn-container'>
        <MdKeyboardArrowLeft />
      </div>
      <div className="category-banner-title-container">
        <h1 className='category-title'>Hamburger</h1>
        <p className='category-sub-title'>Discover whatever you need easily</p>
      </div>
      <div className="category-banner-breadcrumbs-container">
        <ul className='breadcrumbs-wrapper'>
          <li className="breadcrumb">Menus</li>
          <li className="breadcrumb">Food</li>
          <li className="breadcrumb">Hamburger</li>
        </ul>
      </div>
      <MiniCart />
    </div>
  )
}

export default CategoryBanner;
