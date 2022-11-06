import React,{useEffect, useRef} from 'react'
import QRCode from 'qrcode'

export function QRCodeCanvas({text}){

const canvasRef = useRef();


useEffect(()=>{
    QRCode.toCanvas(canvasRef.current,text,{width:400},(error)=>{
        console.log(error)
    })
}, [text])
    return(
        <div>
            <canvas ref={canvasRef}id="canvas"></canvas>
        </div>
    )
}