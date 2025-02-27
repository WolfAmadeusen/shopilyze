import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/* Pages */
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import NotFound from '../Pages/NotFound';
import Basket from '../Pages/Basket';
import Catalog from '../Pages/Catalog/Catalog';
import ProductByCategory from '../Pages/Catalog/ProductByCategory';
import OrderCompleted from '../Pages/Order/Order';
import Profile from '../Pages/Profile/Profile';

const getRoutes = () => (
   <Routes>
      {/* Redirect */}
      <Route path="/" element={<Navigate to="/api/product" />} />

      {/* Основное */}
      <Route path="api/product" element={<Home />} />
      <Route path="api/product/:id" element={<Product />} />
      <Route path="api/basket" element={<OrderCompleted />} />
      
      {/* Категории */}
      <Route path="api/product/category" element={<Catalog />} />
      <Route path="api/product/productByCategory/:category" element={<ProductByCategory />} />

      {/* Для клиента */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/Orders" element={<Profile />} />
      
      {/* Переписать роуты api/basket -> profile/favorite */}
      <Route path="/profile/favorite" element={<Basket />} />

      {/* Все ошибки */}
      <Route path="*" element={<NotFound />} />
   </Routes>
);

export default getRoutes;