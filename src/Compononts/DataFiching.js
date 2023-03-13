import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFiching() {
    const [post, setPost] = useState({})
    const [id,setId] = useState('')
    const [idFromButtonClick,setIdFromButtonClick] = useState('')

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }
console.log(id)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res.data);
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
           {/* <ul>
            {
                post.map(post => <li key={post.id}>{post.title}</li>)
            }
           </ul> */}
        </div>
    )
}

export default DataFiching
