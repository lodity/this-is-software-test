import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SavedUsers from './pages/SavedUsers'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/saved-users' element={<SavedUsers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
