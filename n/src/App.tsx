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
import { LR } from './pages/LinearR'
import { PR } from './pages/polyR'
import { MR } from './pages/MultiR'
import { CramerRule } from './pages/CramerRule'
import { GE } from './pages/GaussElimination'
import { GJ } from './pages/GaussJordan'
import { JC } from './pages/Jacobi'
import { LUCOM } from './pages/LU'
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
            <Route path="/linearregression" element={<LR />} />
            <Route path="/polynomialregression" element={<PR />} />
            <Route path="/multiregression" element={<MR />} />
            <Route path="/cmr" element={<CramerRule />} />
            <Route path="/ge" element={<GJ />} />
            <Route path="/gj" element={<GE />} />
            <Route path="/jc" element={<JC />} />
            <Route path="/lu" element={<LUCOM />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
