import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import NotFound from "../pages/404";
import Home from "../pages/home";
import ProductPage from "../pages/product";
import PublishProductPage from '../pages/publish-product'
import MyProducts from '../pages/my-products'

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:product_id" element={<ProductPage />} />
            <Route path="/publish-product" element={<PublishProductPage />} />
            <Route path="/my-products" element={<MyProducts />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}