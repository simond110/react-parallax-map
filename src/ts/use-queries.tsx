import { useState, useEffect } from 'react';
import { get } from './fetchers';

export const useGetText = ({ path }) => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const { results } = await get(path);
        setData(results)
    }

    useEffect(() => {
        getData()
    }, [])

    return data;
}