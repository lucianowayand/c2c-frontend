import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import NotFound from "../pages/404";
import Home from "../pages/home";
import ProductPage from "../pages/product";
import PublishProductPage from '../pages/publish-product'
import UpdateProduct from '../pages/update-product'
import MyProducts from '../pages/my-products'
import MyChats from '../pages/my-chats'
import Chat from '../pages/chat'

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:product_id" element={<ProductPage />} />
            <Route path="/publish-product" element={<PublishProductPage />} />
            <Route path="/update-product/:product_id" element={<UpdateProduct />} />
            <Route path="/my-products" element={<MyProducts />} />
            <Route path="/my-chats" element={<MyChats />} />
            <Route path="/product/:product_id/chat/:chat_id" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}