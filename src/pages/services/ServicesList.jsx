import React from "react"
import servicesData from "./servicesData"
import {Link, useLocation} from 'react-router-dom'

function ServicesList() {
    const location = useLocation()
    console.log(location)
    const services = servicesData.map(service => {
        return (
            <h3 key={service._id}>
                <Link to={service._id}>
                    <button>{service.name}</button>
                </Link> - $ {service.price}.00
            </h3>
        )
    })
    return (
        <div>
            <h1>Services List Page</h1>
            {services}            
        </div>
    )
}

export default ServicesList