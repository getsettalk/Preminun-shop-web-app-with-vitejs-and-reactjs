import { useState, useEffect } from "react";
import { fetchDataFromApi } from '../utils/api';

const useFetch = (endpoint) => {
    const [data, setData] = useState();
    if (!endpoint) {
        return null;
    }

    useEffect(() => {
        makeCall()
    }, [endpoint])


    const makeCall = async () => {
        const res = await fetchDataFromApi(endpoint)
        setData(res)
    }
    return { data };
}

export default useFetch;