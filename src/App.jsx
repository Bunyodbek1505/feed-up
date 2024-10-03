import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Bizhaqimizda from './pages/Bizhaqimizda.jsx'
import Yangiliklar from './pages/Yangiliklar.jsx'
import Ishorinlari from './pages/Ishorinlari.jsx'
import Fillial from './pages/Fillial.jsx'
import Xarita from './pages/xarita.jsx'
import Savatcha from './pages/Savatcha.jsx'
import Header from './Components/Header.jsx'
import Admin from './pages/Admin.jsx'
import Alert_product from './Components/Alert_of_product.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CardList2 from './Components/Cards2.jsx'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bizhaqimizda' element={<Bizhaqimizda />} />
        <Route path='/yangiliklar' element={<Yangiliklar />} />
        <Route path='/ishorinlari' element={<Ishorinlari />} />
        <Route path='/filiallar' element={<Fillial />} />
        <Route path='/xarita' element={<Xarita />} />
        <Route path='/savatcha' element={<Savatcha />} />
        <Route path='/adminpanel' element={<Admin />} />
        <Route path='' element={<Alert_product />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/allproducts' element={<CardList2 />}/>
        <Route path='/allproducts/edit/:id' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
