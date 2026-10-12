import { useEffect, useState } from "react";
import axios from "axios";
export default function useFetchData(url) {
 const [data,setData]=useState([]); const [loading,setLoading]=useState(true); const [error,setError]=useState("");
 useEffect(()=>{ const controller=new AbortController(); async function load(){setLoading(true);setError("");try{const response=await axios.get(url,{signal:controller.signal});setData(response.data);}catch(err){if(err.code!=="ERR_CANCELED")setError(err.message||"Unable to fetch data.");}finally{if(!controller.signal.aborted)setLoading(false);}} load(); return ()=>controller.abort();},[url]);
 return {data,loading,error};
}