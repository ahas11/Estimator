import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wall from './pages/Wall'
import { Toaster } from 'sonner'
import SprayFoam from './pages/SprayFoam'
import Clients from './pages/Clients'
import InsulationType from './pages/InsulationType'
import Scope from './pages/Scope'

function App() {

  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      <Routes>
        <Route>
        <Route index path='/' element={<Navigate to='/Home' />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/sprayFoam' element={<SprayFoam />} />
        <Route path='/wall' element={<Wall />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/insulationtype' element={<InsulationType />} />
        <Route path='/scope' element={<Scope />} />
          
        </Route>
        <Route path='/home' element={<Home />} />
      </Routes>
      <Toaster richolor/>

    </main>
  )
}

export default App
