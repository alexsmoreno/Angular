import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PrincipalPage} from './view/principal/PrincipalPage';

const elemento = React.createElement("h1", { className: 'contenedor' }, "Hola mundo");
const elemento2 = <h1 className='contendor'>HOLAA</h1>;

/*class Primer extends React.Component {

  constructor() {
    super();
    this.state = { quantity: 0 }
  }

  aumentar() {
    this.setState({ quantity: this.state.quantity + 1 })
  }




  render() {
    return (
      <div>
        <h1 className='cotenedor'>{this.state.quantity}</h1>
        <button onClick={() => this.aumentar()}>Aumentar</button>

      </div>
    );
  }


}*/
/*
function PrimerHuck({titulo}) {
 const [result,setResul] =useState(1)
 const aumentar=()=>{
   setResul(result+1);
 }

  return(
    <div>
      <h1 className='cotenedor'>{titulo} {result}</h1>
      <button onClick={aumentar} >Aumentar</button>
    </div>
  )



}*/


ReactDOM.render(

  <PrincipalPage/> ,document.getElementById('root')

);


