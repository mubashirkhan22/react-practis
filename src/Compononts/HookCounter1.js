import React, { useState, useEffect } from 'react'

function HookCounter1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log(`useEffect-updating document title`)
        document.title = `You Clicked ${count} Times`
    }, [count])
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} Time</button>
        </div>
    )
}

export default HookCounter1
