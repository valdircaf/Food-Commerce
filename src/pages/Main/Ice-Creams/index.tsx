import { SnackTitle } from "../../../components/SnackTitle";
import {useState, useEffect} from 'react';
import Head from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import {getIceCreams} from '../../../services/api'
import Cart from "../../../components/Cart"


export default function IceCreams(){

  const [iceCreams, setIceCreams] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const iceCreamsValue = await getIceCreams();
      setIceCreams(iceCreamsValue.data)
    })()
  }, [])

  return <>
  <Head title="Sorvetes"/>
  <SnackTitle>Sorvetes</SnackTitle>
  <Snacks snacks={iceCreams}></Snacks>
  <Cart/>
  </>
}
