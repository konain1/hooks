import { useState } from "react"


export function Sumofall(){

    const [sum,setSum] = useState(0)

    function HandlerSum(e){
        let n = e.target.value
        let sums = 0;

        for(let i = 1; i <= n;i++){
            sums = sums + i
        }
        setSum(sums)

    }
    return <>
        <div>
            <input type="number" onChange={HandlerSum}></input>
            <br></br>
            <h1>sum of {sum}</h1>
            <button>count</button>
        </div>
    </>
}