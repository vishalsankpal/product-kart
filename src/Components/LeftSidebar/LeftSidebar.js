import React,{useState} from 'react';
import './LeftSidebar.scss';
import { BsChevronLeft,BsStars,BsMoon,BsSun } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { CiFilter,CiMemoPad,CiDiscount1 ,CiSettings} from "react-icons/ci";
import { RxDotsHorizontal ,RxTimer} from "react-icons/rx";
import { MdSpaceDashboard } from "react-icons/md";
import { SlCreditCard } from "react-icons/sl";
const LeftSidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const current = new Date();
  const date = current.getDate();
  const month = current.toLocaleString('default',{month:'long'})
  const weekday = [ 'Sun','Mon', 'Tues', 'Wed', 'Thu', 'Fri','Sat'];
    const widthToggleSwitcher = () => {
        if(sidebarToggle){
            setSidebarToggle(false)
        }else{
            setSidebarToggle(true)
        }
    }
  return (
    <div className={`left-sidebar ${sidebarToggle ? 'mini' : ''}`} >
        <div className='left-sidebar-container'>
            <div className='left-sidebar-logo-text-container'>
                <div className='left-sidebar-logo-container' color='#EF5657'>
                    <GiElectric/>
                </div>
                <div className='left-sidebar-text-container'>
                    <h1 className='left-sidebar-text'>ProductKart</h1>
                    <p className='date'>{`${weekday[current.getDay()]} ${date} ${month.substring(0,3)}`}</p>
                </div>
                <div className='left-sidebar-width-switcher' onClick={widthToggleSwitcher}>
                    <div className='width-switcher-wrapper'>
                        <BsChevronLeft />
                    </div>
                </div>
            </div>
        </div>
        <div className='left-sidebar-selected-category-container '>
            <div className='category-image-container'>
                <FaHamburger />
            </div>
            <div className='category-text-container'>
                <p>Menu</p>
                <h2 className="category-title">Burger</h2>
            </div>
            <div className="category-filter-container">
                <p className='category-filter-wrapper'>
                    <CiFilter /> Filter
                </p>
            </div>
        </div>
        <div className="left-sidebar-navigation-container">
            <div className='navigation-title-container'>
                <h3 className='navigation-title'>Menu Dashboard</h3>
                <div className='dots-container'>
                    <RxDotsHorizontal />
                </div>
            </div>
            <nav>
                <ul className='navigation-container'>
                    <li className='navigation-link active'>
                        <span className="navigation-icon"><MdSpaceDashboard /></span>
                        <span className="navigation-text">Dashboard</span>
                        <span className="navigation-label"></span>
                    </li>
                    <li className='navigation-link'>
                        <span className="navigation-icon"><CiMemoPad /></span>
                        <span className="navigation-text">Menus</span>
                        <span className="navigation-label"></span>
                    </li>
                    <li className='navigation-link'>
                        <span className="navigation-icon"><RxTimer /></span>
                        <span className="navigation-text">History</span>
                        <span className="navigation-label"></span>
                    </li>
                    <li className='navigation-link'>
                        <span className="navigation-icon"><SlCreditCard /></span>
                        <span className="navigation-text">Wallet</span>
                        <span className="navigation-label"></span>
                    </li>
                    <li className='navigation-link'>
                        <span className="navigation-icon"><CiDiscount1 /></span>
                        <span className="navigation-text">Promotion</span>
                        <span className="navigation-label">12 +</span>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='left-sidebar-navigation-container mb-0'>
            <div className='navigation-title-container'>
                <h3 className='navigation-title'>General</h3>
                <div className='dots-container'>
                    <RxDotsHorizontal />
                </div>
            </div>
            <nav>
                <ul className='navigation-container'>
                    <li className='navigation-link'>
                        <span className="navigation-icon"><CiSettings /></span>
                        <span className="navigation-text">Settings</span>
                        <span className="navigation-label"></span>
                    </li>
                    <li className='navigation-link'>
                        <span className="navigation-icon"><BsStars /></span>
                        <span className="navigation-text">Give Rating</span>
                        <span className="navigation-label"></span>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='color-switcher-container'>
            <div className="color-switcher">
                <button className='dark-color-btn'><BsMoon />Dark</button>
                <button className='light-color-btn active'><BsSun />Light</button>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar
