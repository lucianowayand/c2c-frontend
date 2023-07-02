import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import NotFound from "../pages/404";
import Home from "../pages/home";
import ProductPage from "../pages/productPage";
import PublishProductPage from '../pages/publishProductPage'

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productPage" element={<ProductPage />} />
            <Route path="/publishProductPage" element={<PublishProductPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}