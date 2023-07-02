import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import NotFound from "../pages/404";
import Home from "../pages/home";
import ProductPage from "../pages/productPage";

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/productPage" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}