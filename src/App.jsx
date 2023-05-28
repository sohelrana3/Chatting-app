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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/RootLayouts' element={<RootLayouts />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />

}

export default App
