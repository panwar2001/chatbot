import { useState } from "react";

const Age=(props)=>{
    const [age,setAge]=useState('18');
    const [ageList,setAgeList]=useState([18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);
    const handleSubmit = (event) => {
            props.actionProvider.handleAge(age);
    }
     return (<>
       <select onChange={(e)=>setAge(e.target.value)}>
        {ageList.map((n)=>{
           return <option value={n} key={n}>{n}</option>
        })}
       </select>
       <button onClick={()=>handleSubmit()}>Submit</button>
    </>)
}
export default Age;