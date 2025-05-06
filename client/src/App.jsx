
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MobileSearchJobs from "./pages/MobileSearchJobs";
import JobList from "./components/Homecomponents/JobList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/seekerform" element={<MobileSearchJobs />} />
      <Route path="/search" element={<JobList />} />
    </Routes>
  );

}

export default App;
