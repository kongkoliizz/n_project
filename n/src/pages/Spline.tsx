import Spline from 'typescript-cubic-spline'
import { useState } from 'react'

export const SP = () => {
  const [my, setY] = useState('')
  const [mx, setX] = useState('')
  const [val, setV] = useState('')

  const handleSubmit = () =>{
    var a = S({Y:my}, {X:mx}, {V:val})
  } 
  const S = ({Y}:{Y:string}, {X}:{X:string}, {V}:{V:string}) =>{
    const mX = JSON.parse(X)
    const mY = JSON.parse(Y)
    const value = parseFloat(V)

    let spline = new Spline(mX, mY)
    let ans = spline.at(value)
  }
  return (
    <div>
        <h1>Spline</h1>
    </div>
  )
}