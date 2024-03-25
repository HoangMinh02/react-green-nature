import { Route, Routes } from "react-router-dom";
import "./App.css";
import BackTop from "./component/BackTop";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Products from "./component/Products/Products";
import Home from "./component/Home/Home";
import DetailProduct from "./component/DetailProduct/DetailProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./CardContext";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Search from "./component/Header/Search";
import CartProduct from "./component/CartProduct/CartProduct";
import Order from "./component/Order/Order";

function App() {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <CartProvider>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/product" element={<Products></Products>}></Route>
                    <Route path="/detail/:slug" element={<DetailProduct></DetailProduct>}></Route>
                    <Route path="/search/:slug" element={<Search></Search>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                    <Route path="/cart-product" element={<CartProduct></CartProduct>}></Route>
                    <Route path="/order" element={<Order></Order>}></Route>
                </Routes>
                <BackTop></BackTop>
                <Footer></Footer>
            </CartProvider>
        </div>
    );
}

export default App;
