import { Container } from "./styles";
import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from "../../helpers/currencyFormat";
import { useState } from "react";
import Cart from "../Cart";

interface SnacksProps{
  snacks: any[];
}


export function Snacks({snacks} : SnacksProps){

  const [snacksCart, setSnacksCart] = useState([{}]);

  console.log(snacksCart)

  return (
    <Container>
      {snacks.map((snack)=>(
        <div key={snack.id} className='snack'>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name}/>
          <p>{snack.description}</p>
          <div>
            <strong>{currencyFormat(snack.price)}</strong>
            <button type="button" onClick={()=>{
              setSnacksCart([...snacksCart, {
                "id": snack.id,
                "snack": snack.snack,
                "name": snack.name,
                "description": snack.description,
                "price": snack.price,
                "image": snack.image,
              }])

            }}>
              <FiPlus/>
            </button>
          </div>
        </div>

      ))}
    <Cart/>
    </Container>
  )
}
