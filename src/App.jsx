import './app.css';
import Axios from "axios";
import React, { useEffect, useState } from 'react';
import Loader from '../componentes/Loader/Loader';
import Img from '../componentes/img/img';

 
 export default function App(){ 
  const[personagem, setPersonagem] = useState("");
  const[resultado, setResultado] = useState(``);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

 
  
  const selecionePersonagem =  () => {
    Axios.get(`https://dragonball-api.com/api/characters/${personagem}`).then((resposta) => {
      setResultado(resposta.data.image)
   
    })
  }
  return(
    <>
    <div>
      <h1>Qual Personagem de Dragon Ball Vai Cai</h1>
      <label htmlFor=""></label>
  <input  type="text" placeholder='digite um Numero' onChange ={ (event) => {
    setPersonagem(event.target.value)}}/>
 <button  onClick={selecionePersonagem}>ok</button>
 {loading ? <Loader/> :
  <Img Src={resultado}/>
 }
    
    </div>
    </>
  )
} 
