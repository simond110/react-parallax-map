import axios from 'axios';

export async function get(
    path: string
) {
    const { data } = await axios.get(path);
    return data;
};