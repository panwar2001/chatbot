import { useNavigate } from "react-router-dom";
const Enroll=()=>{
    const navigate=useNavigate();
    return (<>
    <h3>Enter into Student Info System</h3>
    <button onClick={()=>navigate('/student-enrollment',{replace:true})}>Enroll Now!</button>
    </>);
}
export default Enroll;