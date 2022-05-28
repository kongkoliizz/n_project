import { useState } from "react"
import { LagrangeInterpolationMethod } from "../Method/LagrangeInterpolation"
// import $ from "jquery"
// const $ = require( "jquery" )( window );
import { $ }  from 'react-jquery-plugin'

export const Lagrangepolynomials = () => {
  const [y, setY] = useState('')
  const [x, setX] = useState('')
  const [v, setV] = useState('')

  const handleSubmit = () =>{
    LagrangeInterpolationMethod()
  }

  const test = () =>{
    test_text = $('#test').text();
    console.log(test_text);
  }

  $('#test').click(function() {
    console.log("Hello world")
  });

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">Lagrange</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Y</label>
              <input
                type="text"
                className="form-control"
                id="yl"
                value={y}
                onChange= {(e) => setY(e.target.value)}
                placeholder="....."
              />
            </div>
            <div className="form-group">
              <label>X</label>
              <input
                type="text"
                className="form-control"
                id="xl"
                value={x}
                onChange= {(e) => setX(e.target.value)}
                placeholder="....."
              />
            </div>
            <div className="form-group">
              <label>Value</label>
              <input
                type="text"
                className="form-control"
                id="vl"
                value={v}
                onChange= {(e) => setV(e.target.value)}
                placeholder="....."
              />
            </div>
          </form>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">
              Submit
          </button>
        </div>
      </div>
      <button onClick={test} className="btn btn-primary" id="test">TEST</button>
    </div>
  )
}