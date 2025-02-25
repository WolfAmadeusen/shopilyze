import { Link } from 'react-router-dom';
import './basket.css';
import CartItem from '../goods/CartItem/CartItem';
import { ButtonMain } from '../buttons/button';
import WhiteButton from '../buttons/WhiteButton/WhiteButton';
import React from 'react';

export function BasketEmpty() {
   return (
      <div className="basket">
         <h1 className="text-4xl">Корзина пуста</h1>
         <img src="/images/main/variable/basket/bigBasket.svg" alt="Big basket" />
         <h1>К сожалению, у вас нету товара</h1>
         <div className="flex flex-col items-center justify-center gap-2">
            <p>Вы можете нажать на кнопку “Продолжить покупки”, либо вы можете нажать</p>
            <p>на логотип, и вас переведет на главную страницу сайта</p>
         </div>
         <Link to='/'>
            <ButtonMain name={'Продолжить покупки'} />
         </Link>
      </div>
   );
}


// BasketMain component
export function BasketMain({ basket, onRemove, onUpdateQuantity }) {
   // Рассчитываем итоговую стоимость
   const totalPrice = basket.reduce((total, item) => total + item.price * item.quantity, 0);

   return (
      <>
         <div className="container mx-auto">
            <div className="flex justify-between align-center">
               <h1 className="text-4xl font-semibold mb-6">Избранные товары</h1>
               <WhiteButton className="flex justify-center items-center px-4 py-2">
                  <Link to="/">Продолжить покупки</Link>
               </WhiteButton>
            </div>

            {/* Отображаем товары в корзине */}
            {basket.map(item => (
               <CartItem
                  key={item.id}
                  idProduct={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  categories={item.categories}
                  onRemove={() => onRemove(item.id)}
                  onUpdateQuantity={onUpdateQuantity}
               />
            ))}
         </div>
      </>
   );
}
