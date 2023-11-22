import  React, { useState } from "react"

const Count =()=> {
    const[moi,setMoi]=useState(0)
    const incremente=()=>{
        setMoi((a)=>a+1)
    }
    return(<div>
        <button onClick={incremente}>{moi}...au compteur</button>
    </div>)

}

export default Count;