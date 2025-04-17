import Login from "./LoginForms/Login/Login"
import SignUp from "./LoginForms/SignUp/SignUp"
import Landing from "./Pages/Landing/Landing"
import BuyPage from "./Pages/BuyPage/BuyPage"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart"
import PaymentPage from "./Pages/PaymentPage/PaymentPage"
import AboutUs from "./Pages/AboutUs/AboutUs"
import NewAllProducts from "./Pages/AllProducts/NewAllProducts"

let Router = [
    {path: '/', element: <Landing />},
    {path: '/Login', element: <Login />},
    {path: '/Signup', element: <SignUp />},
    {path: '/BuyPage/:id', element: <BuyPage />},
    {path: '/ShoppingCart', element: <ShoppingCart />},
    {path: '/PaymentPage', element: <PaymentPage />},
    {path: '/AboutUs', element: <AboutUs />},
    {path: '/NewAllProducts', element: <NewAllProducts />}
]

export default Router