import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Enroll from './Enroll';
import Enrolled from './Enrolled';
import StudentInfoBot from './StudentInfoBot';
const App = () => { 
   return (<BrowserRouter>
             <Routes>
                <Route path='/' element={<Enroll/>}/>
                <Route path='/student-enrollment' element={<StudentInfoBot/>}/>
               <Route path='/enrolled' element={<Enrolled/>}/>
             </Routes>
         </BrowserRouter>);
  }
  export default App;