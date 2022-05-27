import React, { useState } from 'react'

export const Lagrangepolynomials = () => {
  const [y0, setY] = useState('')
  const [mx, setX] = useState('')
  const [val, setV] = useState('')

  const L = ({Y}:{Y:string}, {X}:{X:string}, {V}:{V:string}) =>{
    const mX = JSON.parse(X)
    const mY = JSON.parse(Y)
    const value = parseFloat(V)
    let n = mX.length

    let yp = 0

    for(let i = 0; i < n; i++){
        let p = 1
        for(let j = 0; j < n; j++){
            if(i != j){
                p = p * (value - mX[j])/(mX[i] - mX[j])
            }
        }
        yp = yp + p * mY[i]
    }
  }
  return (
    <div>
        <h1>Lagrangepolynomials</h1>
    </div>
  )
}