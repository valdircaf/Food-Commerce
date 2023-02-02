import { CartContainer } from "./styled";
import { NavLink } from "react-router-dom";


export default function Cart(){

  return <>
    <CartContainer>
      <NavLink to='cart'>
        Carrinho
      </NavLink>
    </CartContainer>
  </>


}
