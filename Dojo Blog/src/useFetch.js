import {useState, useEffect } from "react";
const useFetch=(url)=>{
    const[data, setData]=useState(null);
    const[isLoading,setisLoading]=useState(true)
    const[error,setError]=useState(null);

    useEffect(()=>{
        const abortCout = new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortCout.signal})
        .then(res=>{
            if(!res.ok){
                throw Error('I am sorry this is an error')
            }
        // console.log(res);
            return res.json();
        })
        .then(data=>{
            setisLoading(false)
            setData(data);
            setError(null)
        })
        .catch(err=>{
            if(err.name==='AbortError'){
                console.log('fetch aborted');
            }
            setisLoading(false)
          setError(err.message);
        })
        },400)

        return()=>abortCout.abort();
        },[url])   
        return{data,isLoading,error}
}
export default useFetch;