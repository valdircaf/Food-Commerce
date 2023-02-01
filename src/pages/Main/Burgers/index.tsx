import Head from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import {useState, useEffect} from 'react'
import { Snacks } from "../../../components/Snacks"
import { getBurgers } from "../../../services/api"
import Cart from "../../../components/Cart"

export default function Burgers(){

  const [burgers, setBurgers] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const burgersValue = await getBurgers();
      setBurgers(burgersValue.data);
    })()
  }, [])

  return (
    <>
    <Head title='Burgers'/>
    <SnackTitle>Hambúrgueres</SnackTitle>
    <Snacks snacks={burgers}></Snacks>
    <Cart/>
    </>
  )
}
