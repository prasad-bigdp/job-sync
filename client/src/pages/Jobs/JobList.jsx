
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import './JobList.css';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Fetch jobs
  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${process.env.CLIENT_URL}/api/jobs` , {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Delete a job
  const handleDelete = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await axios.delete(`CLIENT_URL/api/jobs/${jobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Job deleted successfully!");
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
    } catch (err) {
      console.error("Error deleting job", err);
      alert("Failed to delete job.");
    }
  };

  //it goes to edit form and based on job id retrives job details
  const handleEdit = (jobId) => {
    navigate(`/edit-job/${jobId}`);
  };

  return (
       
    <div className="joblist-container">
  <div className="joblist-header">
    <h2>My Job Postings</h2>
    <button className="create-job-btn" onClick={() => navigate('/create-job')}>
      <FaPlus className="me-2" />
      Create Job
    </button>
  </div>

  <div className="row">
    {jobs.map((job) => (
      <div key={job._id} className="col-md-6 mb-4">
        <div className="job-card">
          <h5 className="card-title">{job.title}</h5>
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Skills:</strong> {job.skillsRequired.join(", ")}</p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-success me-2"
              onClick={() => handleEdit(job._id)}
            >
              <FaEdit className="me-1" /> Edit
            </button>
            <button
              className="btn btn-outline-info"
              onClick={() => handleDelete(job._id)}
            >
              <FaTrash className="me-1" /> Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default JobList;
