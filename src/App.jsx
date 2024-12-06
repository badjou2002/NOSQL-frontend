import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react"
import Listarticles from './components/articlesRedux/Listarticles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Cart from './components/articlesRedux/Cart';
import Menu from './components/Menu';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import Register from './admin/components/Register';
import Login from './admin/components/Login';
import { useSelector } from "react-redux";
import ProtectedRoutes from './ProtectedRoute';
import ProtectedRoutesLogin from './ProtectedRoutesLogin';
import NotFound from './NotFound';
import ReactLoading from 'react-loading';

function App() {
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth)

  if (isLoading)
    return <center>
      <ReactLoading type='spokes' color="red" height={'8%'} width={'8%'} />
    </center>
  return (
    <>
      <Router>
        {isLoggedIn && <Menu />}
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/articles' element={<Listarticles />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/articlesadmin' element={<ProductsAppAdmin />} />
          </Route>
          <Route element={<ProtectedRoutesLogin />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
