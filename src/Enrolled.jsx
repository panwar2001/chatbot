import { useSelector } from "react-redux";
const Enrolled=()=>{
    const name=useSelector((state)=>state.info.name);
    const age=useSelector((state)=>state.info.age);
    return (<>
    <h3>Your name {name} aged {age} has been added to student system. You may now exit.</h3>
    </>);
}
export default Enrolled;