import { useMemo, useState } from "react"


export function Sumofall(){

    const [n,setn] = useState(0)

    

    let sum = useMemo(()=>{
        let sum = 0
        for(let i = 1; i <= n;i++){
            sum= sum + i
        }
        return sum
    },[n])


    return <>
        <div>
            <input type="number" onChange={(e)=>setn(e.target.value)}></input>
            <br></br>
            <h1>sum of {sum}</h1>
            <button>count</button>
        </div>
    </>
}