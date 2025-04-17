import { useRoutes } from 'react-router-dom';
import './App.css';
import Router from './Routes';
// Context 
import { DataContext } from './Context/Store';
import { useState } from 'react';

function App() {

  const routes = useRoutes(Router)

  // userCart Start (Context) 
  const [userCart, setUserCart] = useState([])
  const [userPaymentProducts, setUserPaymentProducts] = useState([])
console.log(userCart);

  return (
    <>
      <DataContext.Provider value={{
        userCart,
        setUserCart,
        userPaymentProducts,
        setUserPaymentProducts
      }}>
        {routes}
      </DataContext.Provider>
    </>
  );
}

export default App;
