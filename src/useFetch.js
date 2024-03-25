import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const fetchProduct = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
    };
    useEffect(() => {
        fetchProduct();
    }, [url]);
    return data;
};

export default useFetch;
