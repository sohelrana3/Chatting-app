import { useState } from 'react'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import Register from './components/Register';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Register />}></Route>
    )
  );

  return <RouterProvider router={router} />

}

export default App
