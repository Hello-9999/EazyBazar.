import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import Payment from "./Pages/Payment/Payment";
import ShippingInfo from "./Pages/ShhipingInfo/ShippingInfo";
import OrderSummary from "./Pages/Order/OrderSummary";
import OrderDetail from "./Pages/OrderDetail/OrderDetail";
import ProductList from "./Pages/Admin/ProductList";
import Pages from "./Pages/1page/Pages";
import { ToastContainer } from "react-toastify";
import SecureRoute from "./Component/SecureRoute/SecureRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Signin />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/home"} element={<Pages />} />
        <Route path={"/shop"} element={<Home />} />
        <Route path={"/product/:id"} element={<ProductDetail />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/shipping"} element={<ShippingInfo />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/ordersummary"} element={<OrderSummary />} />
        <Route path={"/order/:orderId"} element={<OrderDetail />} />

        <Route path="" element={<SecureRoute />}>
          <Route path={"/admin"} element={<ProductList />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
