import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {updateCountDown} from '../../store/infoSlice';

const Exit=()=>{
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const countDown=useSelector((state)=>state.info.countDown);
    useEffect(() => {
       const  intervalRef=setInterval(()=>{
            dispatch(updateCountDown())
         }, 1000);
        return () => clearInterval(intervalRef);
      },[]);
    if(countDown<0){
        navigate('/enrolled',{replace:true});         
    }
return (<h2>{countDown}</h2>);
}

export default Exit;