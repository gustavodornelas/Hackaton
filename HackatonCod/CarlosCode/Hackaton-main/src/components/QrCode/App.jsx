import {useState} from 'react';
import './style.css'
import {QRCodeCanvas} from './QRCodeCanvas'



export function QRCode(){

    const[text,setText] = useState("Alguma Coisa");

    return(
    <div className="app">
        <input className='inputCanva' onChange={(element)=>{setText(element.target.value)}}/>       
         <QRCodeCanvas text={text}></QRCodeCanvas>
    </div> 
    )
}