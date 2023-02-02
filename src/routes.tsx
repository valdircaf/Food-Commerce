import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import DrinksPage from './pages/Main/Drinks'
import IceCreamsPage from './pages/Main/Ice-Creams'
import { CartPageContainer } from './pages/Main/CartPage/styled'
import CartPage from './pages/Main/CartPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>

        <Route path='/' element={<BurgersPage />}/>
        <Route path='pizzas' element={<PizzasPage />}/>
        <Route path='drinks' element={<DrinksPage />}/>
        <Route path='ice-creams' element={<IceCreamsPage />}/>
        <Route path='cart' element={<CartPage />}/>
        <Route path='ice-creams/cart' element={<CartPage />}/>
        <Route path='pizzas/cart' element={<CartPage />}/>
        <Route path='drinks/cart' element={<CartPage />}/>




      </Route>
    </Routes>
  )
}
