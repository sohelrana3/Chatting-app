import { useState } from 'react'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
// import pages
import Register from './pages/Register';
import Login from './pages/Login';
import RootLayouts from './components/RootLayouts';
import Home from './pages/Home';
import Massges from './pages/Massges';
import Notification from './pages/Notification';
import Settinge from './pages/Settinge';
import Forgetpassword from './pages/Forgetpassword';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/foregetpassword' element={<Forgetpassword />}></Route>
        <Route path='/bachal' element={<RootLayouts />}>
          <Route path='home' element={<Home />}></Route>
          <Route path='massges' element={<Massges />}></Route>
          <Route path='Notification' element={<Notification />}></Route>
          <Route path='settinge' element={<Settinge />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />

}

export default App
