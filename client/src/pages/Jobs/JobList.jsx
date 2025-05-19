import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import './JobList.css';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Fetching jobs
  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${process.env.CLIENT_URL}/api/jobs`, {
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

  // Open confirm modal
  const handleDeleteClick = (jobId) => {
    setSelectedJobId(jobId);
    setShowConfirmModal(true);
  };

  // Confirm delete
  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`CLIENT_URL/api/jobs/${selectedJobId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== selectedJobId));
      setAlertMessage("Job deleted successfully!");
    } catch (err) {
      console.error("Error deleting job", err);
      setAlertMessage("Failed to delete job.");
    } finally {
      setShowConfirmModal(false);
      setShowAlertModal(true);
      setSelectedJobId(null);
    }
  };

  // Close alert modal
  const handleCloseAlert = () => {
    setShowAlertModal(false);
    setAlertMessage('');
  };

  //it goes to edit form and based on job id retrives job details
  const handleEdit = (jobId) => {
    navigate(`/edit-job/${jobId}`);
  };

  return (
    <div className="joblist-container">
      {/* Confirm Delete Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-6">Are you sure you want to delete this job?</p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert Modal */}
      {showAlertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Notification</h3>
            <p className="mb-6">{alertMessage}</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleCloseAlert}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

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
                  onClick={() => handleDeleteClick(job._id)}
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
