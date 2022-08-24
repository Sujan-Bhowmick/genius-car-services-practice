import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useServiceDetail = serviceid => {
    const {serviceId} = useParams();
    const [service, setServices] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data));
    }, [serviceid])
    return [service]
}

export default useServiceDetail;