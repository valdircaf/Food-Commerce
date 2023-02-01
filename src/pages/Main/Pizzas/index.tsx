import { SnackTitle } from "../../../components/SnackTitle"
import {useEffect, useState} from 'react'
import Head from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { getPizzas } from "../../../services/api";
import Cart from "../../../components/Cart";

export default function Pizzas(){


  const [pizza, setPizza] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const pizzaValue = await getPizzas();
      setPizza(pizzaValue.data);
    })()
  }, [])

  return <>
    <Head title="Pizzas"/>
    <SnackTitle>Pizzas</SnackTitle>
    <Snacks snacks={pizza}></Snacks>
    <Cart/>
  </>
}
