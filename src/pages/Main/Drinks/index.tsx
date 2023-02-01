import { SnackTitle } from "../../../components/SnackTitle"
import {useState, useEffect} from 'react'
import Head from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { getDrinks } from "../../../services/api"
import Cart from "../../../components/Cart"

export default function Drinks(){

  const [drinks, setDrinks] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const drinksValue = await getDrinks();
      setDrinks(drinksValue.data);
    })()
  }, [])

  return <>
  <Head title="Bebidas"/>
  <SnackTitle>Bebidas</SnackTitle>
  <Snacks snacks={drinks}></Snacks>
  <Cart/>
  </>
}
