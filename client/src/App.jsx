import { BrowserRouter , Routes, Route } from 'react-router-dom';
import JobList from './pages/Jobs/JobList';
import EditJobForm from './pages/Jobs/EditJobForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostJob from './pages/Jobs/PostJob';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path ="/" element={<JobList />} /> 
         {/* <Route path="/login" element={<EmployeeLogin/>}/> 
        <Route path="/EmployerLogin" element={<EmployeeLogin/>} />
        <Route path="/EmployerSignup" element={<EmployerSignup/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/UserSignup" element={<UserSignup />} />  */}
        <Route path="/my-jobs" element={<JobList />} />
        <Route path ="/create-job" element={<PostJob />} /> 
        <Route path="/edit-job/:jobId" element={<EditJobForm />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
