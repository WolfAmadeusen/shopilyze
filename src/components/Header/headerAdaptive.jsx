import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { checkToken } from "../../utils/checkToken";
import './Header.css';

export default function HeaderAdaptive() {
   const [isOpen, setIsOpen] = useState(true);

   const closeMenu = () => {
      document.body.style.overflow = 'visible';
      setIsOpen(false);
   };

   if (!isOpen) {
      return null;
   }

   
   return (
      <div className="header-adaptive">
         <section className="toggle-menu-search relative ">
            <button className="close-button" onClick={closeMenu}>
               &times;
            </button>

            <div className="menu">
               <Link to={'/'} className="menu-item">
                  <img
                     src="/images/main/variable/house/houseAdaptive.svg"
                     width="30px"
                     height="auto"
                     alt="Home"
                  />
               </Link>
               <Link to={'/profile'} onClick={checkToken} className="menu-item">
                  <img
                     src="/images/main/variable/human/main.svg"
                     width="30px"
                     height="auto"
                     alt="Profile"
                  />
               </Link>
               <select name="lang" className="select-lang">
                  <option value="RU">RU</option>
                  <option value="UA">UA</option>
               </select>
            </div>

            <ul className="main-menu flex flex-col gap-8">
               <li>
                  <span>Компьютеры и ноутбуки</span>
                  <img src="/images/main/variable/arrow/arow.svg" alt="img"/>
               </li>
               <li>
                  <span>Компьютеры и ноутбуки</span>
                  <img src="/images/main/variable/arrow/arow.svg" alt="img"/>
               </li>
               <li>
                  <span>Компьютеры и ноутбуки</span>
                  <img src="/images/main/variable/arrow/arow.svg" alt="img"/>
               </li>
               <li>
                  <span>Компьютеры и ноутбуки</span>
                  <img src="/images/main/variable/arrow/arow.svg" alt="img"/>
               </li>
               <li>
                  <span>Компьютеры и ноутбуки</span>
                  <img src="/images/main/variable/arrow/arow.svg" alt="img"/>
               </li>
            </ul>

            <div className="additional-links">
               <h6>Партнерам</h6>
               <span className="mb-4"><Link to={'/'}>Продавать на Shopilyze</Link></span>
               <h6>Продавцам</h6>
               <span><Link to={'/'}>Чат с продавцами</Link></span>
            </div>
         </section>
      </div>
   );
}