import React from "react"
import {useParams, useNavigate} from 'react-router-dom'
import servicesData from "./servicesData"

function ServiceDetail(props) {
    const {serviceId} = useParams()
    const navigate = useNavigate()
    const service = servicesData.filter(item => item._id === serviceId)
    const serviceDetail = service.map(service =>  {
        return(
            <>
                <h3>{service.name} - $ {service.price}.00</h3>
                <p>{service.description}</p>
            </>
        )
    })
    function handleClick() {
        navigate('/services')
    }
    return (
        <div>
            <h1>Service Detail Page</h1>
            {serviceDetail}
            <button
                onClick={handleClick}
            >
                Go back to all services
            </button>
        </div>
    )
}

export default ServiceDetail