import React from 'react'
import './Header.scss';
import { CiSearch } from "react-icons/ci";
import { TfiLoop } from "react-icons/tfi";
import { CgMoreO } from "react-icons/cg";
import { BsChatDots } from "react-icons/bs";
import { MdShare } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
const Header = () => {
  return (
    <header className='header'>
      <div className='header-search-container'>
        <form>
          <div className='search-wrapper'>
            <CiSearch />
            <input type='text' className='search' placeholder='Search menu...' id='search-field'/>
            <submit className="submit" type="submit"><TfiLoop /></submit>
          </div>
        </form>
      </div>
      <div className='right-navigation-container'>
        <nav className="chat-more-container">
          <ul>
            <li className='chat-link'>
              <BsChatDots/>
              <span className='text'>Chat</span>
            </li>
            <li>
              <CgMoreO />
              <span className='text'>More</span>
            </li>
          </ul>
        </nav>
        <div className='share-notes-container'>
          <button className="share-btn"><MdShare />  <span className='text'>Share</span></button>
          <button className="notes-btn"><SlPencil /> <span className='text'>Your Notes</span></button>
        </div>
      </div>
    </header>
  )
}
export default Header;