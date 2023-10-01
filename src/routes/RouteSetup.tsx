import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Lazy Function */
import Lazy from '@utils/Lazy/Lazy';
import Home from "@/pages/home/Home";
import HomeContent from "@/pages/home/components/HomeContent/HomeContent";

export default function RouteSetup() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Home - Navbar + Footer */}
                <Route path="/" element={<Home></Home>}>
                    <Route index element={<HomeContent />}></Route>
                    {/* {Route Product} */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}