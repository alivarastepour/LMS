import {useCallback, useEffect, useState} from "react";

import axios from "axios";

const useGet = (URL,TOKEN ) => {

    const [data, setData] = useState({});

    const fetchData = useCallback(async () => {
        await axios.get(URL,{
            headers:{'Authorization':`Token ${TOKEN}`}
        }).then(ans => {
            setData(ans.data)
        })
          .catch(e => console.log(e));
    },[TOKEN, URL]);

    useEffect(() => {
        fetchData();
    },[TOKEN, URL, fetchData])
    return data;
}

export default useGet;