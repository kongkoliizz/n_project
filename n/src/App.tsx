import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Bisection } from './pages/Bisection'
import { OnePointIteration } from './pages/OnePointIteration'
import { FalsePosition } from './pages/FalsePosition'
import { Secant } from './pages/Secant'
import { NewtonsDividedDifferences } from './pages/NewtonsDividedDifferences'
import { Lagrangepolynomials } from './pages/Lagrangepolynomials'
import { SP} from './pages/Spline'
import { Regression } from './pages/Regression'
import { CramerRule } from './pages/CramerRule'
import { GaussElimination } from './pages/GaussElimination'
import { GaussJordan } from './pages/GaussJordan'
import { Jacobi } from './pages/Jacobi'
import { LU } from './pages/LU'
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/bisection" element={<Bisection />} />
            <Route path="/falseposition" element={<FalsePosition />} />
            <Route path="/onepoint" element={<OnePointIteration />} />
            <Route path="/secant" element={<Secant />} />
            <Route path="/newtonsndivideddifferences" element={<NewtonsDividedDifferences />} />
            <Route path="/lagrangepolynomials" element={<Lagrangepolynomials />} />
            <Route path="/spline" element={<SP />} />
            <Route path="/regression" element={<Regression />} />
            <Route path="/cmr" element={<CramerRule />} />
            <Route path="/ge" element={<GaussElimination />} />
            <Route path="/gj" element={<GaussJordan />} />
            <Route path="/jc" element={<Jacobi />} />
            <Route path="/lu" element={<LU />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
