import { simplify, evaluate } from 'mathjs';
import { useState } from 'react';

export const NewtonsDividedDifferences = () => {
  const [y0, setY] = useState('')
  const [mx, setX] = useState('')
  const [val, setV] = useState('')

  const n = ({Y}:{Y:string}, {X}:{X:string}, {V}:{V:string}) =>{
    const mX = JSON.parse(X)
    const Y0 = JSON.parse(Y)
    const value = parseFloat(V)
    // const mY = []
    let n = mX.length

    for(let i = 0; i < n; i++){
        // mY[i] = [];
        // mY[i][0] = Y0[i]
    }

    let proterm = (i: number, value: number, mX: number[]) => {
        let pro = 1;
        for(let j = 0; j < i; j++){
            pro = pro * (value - mX[j])
        }
        return pro;
    }

    function dividedDiffTable(mX: number[], mY: number[][], n: number){
        for(let i = 1; i < n; i++){
            for(let j = 0; j < n - i; j++){
                mY[j][i] = (mY[j][i-1] - mY[j+1][i-1]) / (mX[j] - mX[i+j])
            }
        }
    }

    let applyFormula = (value: number, mX: number[], mY: number[][], n: number) => {
        let sum = mY[0][0]
        for(let i = 1; i < n; i++){
            sum = sum + (proterm(i, value, mX) * mY[0][i])
        }
        return sum;
    }

    // dividedDiffTable(mX, mY, n)
    // let f = applyFormula(value, mX, mY, n)
    // // console.log(mY)
  }
  return (
    <div>
        <h1>NewtonsDividedDifferences</h1>
    </div>
  )
}