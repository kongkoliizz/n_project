import { det, round } from 'mathjs'
import { useState } from 'react'

export const GaussElimination = () =>{
  const [ma, SetA] = useState('')
  const [mb, SetB] = useState('')

  const handleSubmit = () =>{
    var a = GE({A:ma}, {B:mb})
  }

  const GE = ({A}:{A:string}, {B}:{B:string}) =>{
    const mA = JSON.parse(A)
    const mB = JSON.parse(B)
    const Amat = []
    let size = mA.length
    let check = false
    let x: number[] = []
    for (let i = 0; i < mA.length; i++) {
        if (mA[i].length === size) {
            check = true
            break
        }
    }

    if (check) {
        for (let s = 0; s < size; s++) {
            Amat[s] = []
            for (let i = 0; i <= size; i++) {
                Amat[s][i] = mA[s][i]
            }
            Amat[s][size] = mB[s]
        }
        console.log(Amat)

        for(var i = 0; i < size; i++){
            for(var j = i + 1; j < size; j++){
                var c = Amat[j][i]/Amat[i][i]
                for(var k = 0; k < size+1; k++){
                    Amat[j][k] = Amat[j][k] - c*Amat[i][k]
                }
            }
        }

        for(var i = size-1; i >= 0; i-- ){
            x[i] = Amat[i][size]
            for(var j = i + 1; j < size; j++){
                if(i != j){
                    x[i] = x[i] - Amat[i][j]*x[j]
                }
            }
            x[i] = x[i]/Amat[i][i]
        }
    }
  }
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">GaussElimination</h2>
          <form>
            <div className="form-group">
              <label>Matrix A</label>
              <input
                type="text"
                className="form-control"
                id="maGE"
                value={ma}
                onChange={(e) => SetA(e.target.value)}
                placeholder="Enter Function"
              />
            </div>
            <div className="form-group">
              <label>Matrix B</label>
              <input
                type="text"
                className="form-control"
                id="mbGE"
                value={mb}
                onChange={(e) => SetB(e.target.value)}
                placeholder="Enter Left"
              />
            </div>
          </form>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
              Submit
            </button>
        </div>
      </div>
    </div>
  )
}
