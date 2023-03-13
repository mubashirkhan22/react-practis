import React, { useState, useEffect } from 'react'

function IntervelHookCounter() {
    const [count, setCount] = useState(0)

    // const tick = () => {
    // }

    useEffect(() =>{
        const interval = setInterval(()=>{
            if(count < 60){
                setCount(count + 1)
            }else{
                setCount(0)
            }

        },1000)
        return () =>{
            clearInterval(interval)
        }
    })
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervelHookCounter
