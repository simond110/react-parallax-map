import { useState, useEffect } from 'react';
import { get } from './fetchers';

export const useGetText = () => {
    const [data, setData] = useState([]);

    const getData = async () => {        
        const { results } = await get("https://github.com/simond110/react-parallax-map/db");
        setData(results)
    }

    useEffect(() => {
        getData()
    }, [])

    return data;
}