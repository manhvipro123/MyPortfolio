import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Routes, Route} from "react-router";
import LoginPage from "@/pages/login-page.tsx";
import HomePage from "@/pages/home-page.tsx";
import PortfolioLayout from "@/pages/portfolio-layout.tsx";
import DashboardLayout from "@/pages/dashboard-layout.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<LoginPage/>}/>
                    <Route element={<HomePage/>}>
                        <Route path='dashboard' element={<DashboardLayout/>}/>
                        <Route path='portfolio' element={<PortfolioLayout/>}/>
                    </Route>
                </Route>
            </Routes> </BrowserRouter>
    </StrictMode>,
)
