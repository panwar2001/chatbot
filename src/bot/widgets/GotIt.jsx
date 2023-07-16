import React from "react";
const GotIt=(props)=>{
 return <button onClick={()=>props.actionProvider.handleGotIt()}>Got it</button>   
}
export default GotIt;