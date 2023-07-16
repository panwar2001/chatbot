import { useState } from "react";

const Name=(props)=>{
    const [name,setName]=useState('');
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.actionProvider.handleName(name);
        }
    }
    return (<>
    <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Name here ...' required max={200} onKeyDown={handleKeyDown}/>
    </>)
}
export default Name