import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <Routes>  {/*rutas con el mainlayout envuelto*/}
        <Route element= { <MainLayout /> }>     {/*el mianlayout se usa para envolver todas las rutas */}
          <Route path= "/" element = { <Home /> } />
          <Route path= "/products" element = { <Products /> } />
          <Route path= "/cart" element = { <Cart /> } />
          <Route path= "/login" element = { <Login /> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
