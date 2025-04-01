
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Dashboard from './components/Dashboard';
import Card from './components/Card';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='/card' element={<Card />} />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
