import axios from "axios";
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



  const handleSnacks = (snacks, snacksCart)=>{
    setSnacksCart([{
          id: snacks.id,
          snack: snacks.snack,
          name: snacks.name,
          description: snacks.description,
          price: snacks.price,
          image: snacks.image,
    }])

    snacksCart.map((snack)=>{
      axios({
        method: 'post',
        url:  'http://localhost:5000/snacks',
        data:{
          id: snack.id,
          name: snack.name,
          image: snack.image,
          price: snack.price,
        }
      })
    })


  }





  return (
    <Container>
      {snacks.map((snack)=>(
        <div key={snack.id} className='snack'>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name}/>
          <p>{snack.description}</p>
          <div>
            <strong>{currencyFormat(snack.price)}</strong>
            <button type="button" onClick={()=> {
              handleSnacks(snack, snacksCart);
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
