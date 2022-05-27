import { useState } from 'react'
import { derivative, simplify, evaluate } from 'mathjs'

export const Bisection = () => {
  const [Fx, setFx] = useState('')
  const [Left, setLeft] = useState('')
  const [Right, setRight] = useState('')
  const [Error, setError] = useState('')
  
  const handleSubmit = () => {
    var B = Bisection({fx:Fx}, {L:Left}, {R:Right}, {error:Error})
    console.log(B)
  }

  const Bisection = ({fx}:{fx : string}, {L}:{L : string}, {R}:{R : string}, {error}:{error : string}) => {
    let xl = parseFloat(L)
    let xr = parseFloat(R)
    let er = 1
    let err
    if (error === null || error === '') {
        err = 0.000001
    } else {
        err = parseFloat(error)
    }
    let xm
    let f = (x: number) => {
        let equation = simplify(fx).toString()
        return evaluate(equation, { x })
    }
    let ite = []
    let prot = []
    let key = 1
    while (er > err) {
        xm = (xr + xl) / 2
        ite.push({ key, xl, xr, xm, er })
        key++
        prot.push(f(xm))
        if (f(xm) * f(xr) > 0) {
            er = Math.abs((xm - xr) / xm)
            xr = xm
        } else {
            er = Math.abs((xm - xl) / xm)
            xl = xm
        }
    }
    return xm
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Bisection</h2>
          <form>
            <div className="form-group">
              <label>Fucntion</label>
              <input
                type="text"
                className="form-control"
                id="BiFunction"
                value={Fx}
                onChange={(e) => setFx(e.target.value)}
                placeholder="Enter Function"
              />
            </div>
            <div className="form-group">
              <label>Left</label>
              <input
                type="text"
                className="form-control"
                id="BiLeft"
                value={Left}
                onChange={(e) => setLeft(e.target.value)}
                placeholder="Enter Left"
              />
            </div>
            <div className="form-group">
              <label>Right</label>
              <input
                type="text"
                className="form-control"
                id="BiRight"
                value={Right}
                onChange={(e) => setRight(e.target.value)}
                placeholder="Enter Right"
              />
            </div>
            <div className="form-group">
              <label>Error</label>
              <input
                type="text"
                className="form-control"
                id="BiError"
                value={Error}
                onChange={(e) => setError(e.target.value)}
                placeholder="Enter Error"
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
