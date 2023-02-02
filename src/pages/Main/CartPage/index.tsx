import { CartPageContainer } from "./styled"
import { useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import { currencyFormat } from "../../../helpers/currencyFormat";
import axios from "axios";
import {MdDelete, MdArrowBack} from 'react-icons/md'





export default function CartPage(){

  const [snacks, setSnacks]= useState<any[]>([]);

  useEffect(()=>{
    axios({
      method: 'get',
      url: 'http://localhost:5000/snacks',
      responseType: 'stream'
    }).then((response)=> {
      setSnacks(response.data)
    });
  }, [])

  const deletePost = (id)=>{

    axios.delete(`http://localhost:5000/snacks/${id}`);
    setSnacks(snacks.filter(post => post.id !== id));
  }



  return <CartPageContainer>
    <div>
      <NavLink to = '/'><MdArrowBack/></NavLink>
      <h1>Meus Pedidos</h1>
      <section>



      {snacks && snacks.map((snack)=>(
        <section key={snack.id} className='container-snacks'>
          <div className= 'snacks'>
          <img src={snack.image}/>
          <h1>{snack.name}</h1>
          <h2>{currencyFormat(snack.price)}</h2>
          <button onClick={()=> deletePost(snack.id)}><MdDelete/></button>

          </div>


        </section>
      ))}

      </section>


    </div>
  </CartPageContainer>
}
