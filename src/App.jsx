import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import ServicesList from "./pages/services/ServicesList"
import ServiceDetail from "./pages/services/ServiceDetail"

import {Routes, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Routes>
                <Route
                    path="/*"
                    element={<Home />}
                />
                <Route 
                    path="services/*"
                    element={<ServicesList />}
                />
                <Route 
                    path="services/:serviceId"
                    element={<ServiceDetail />}
                />
            </Routes>
        </div>
    )
}

export default App