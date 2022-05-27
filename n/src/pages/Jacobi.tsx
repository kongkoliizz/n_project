import { useState } from 'react'

export const Jacobi = () =>{
  const [ma, SetA] = useState('')
  const [mb, SetB] = useState('')
  const [mx, SetX] = useState('')
  const [mm, SetM] = useState('')

  const handleSubmit = () =>{
    var a = J({A:ma}, {B:mb}, {X:mx}, {M:mm})
  }

  const J = ({A}:{A:string}, {B}:{B:string}, {X}:{X:string}, {M}:{M:string}) =>{
    const mA = JSON.parse(A)
    const mB = JSON.parse(B)
    const mX = JSON.parse(X)
    const Amat = []
    let size = mA.length
    let check = false
    let x = [], ans = [];
    for (let i = 0; i < mA.length; i++) {
        if (mA[i].length === size) {
            check = true
            break
        }
    }

    for (let i = 0; i < mA.length; i++){
        x[i] = []
        // x[i][0] = mX[i]
    }

    // const { A, X, M } = req.body;
    // let n = A.length, iteration = 0, Iteration = [], x = []
    let m = parseInt(M);

    function jacobi(A: number[][], X: any[][], n: number, m: number) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                X[j][i+1] = A[j][n];
                for (let k = 0; k < n; k++) {
                    if (k != j) {
                        X[j][i+1] -= A[j][k] * X[k][i];
                    }
                }
                X[j][i+1] = X[j][i+1] / A[j][j];
            }
            // for (let i = 0; i < n; i++){
            //     x[i] = X[i][iteration];
            // }
            // Iteration.push({iteration, x});
            // iteration++;
        }
        for (let i = 0; i < n; i++){
            ans[i] = X[i][m-1];
        }
        
    }
    if (check) {
        for (let s = 0; s < size; s++) {
            Amat[s] = [];
            for (let i = 0; i <= size; i++) {
                // Amat[s][i] = mA[s][i]
            }
            // Amat[s][size] = mB[s];
        }
        // console.log(size)
        jacobi(Amat, x, size, m);
    }
  }
  return (
    <div>
        <h1>Jacobi</h1>
    </div>
  )
}