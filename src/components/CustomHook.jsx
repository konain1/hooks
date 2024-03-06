import { useEffect, useState } from "react"


function useTodos(){
    const [info,setInfo]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
    .then((json) =>{
        setInfo(json)
    })

    },[])
    return info
}
export function CustomHook(){

    const infos = useTodos()
    return<>
        <h1>CustomHook</h1>
        {infos.map((item,key)=>{
            return <p key={key}>{item.title}</p>
        })}
    </>
}