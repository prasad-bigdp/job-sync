import React, { useState } from "react"
import axios from "axios"
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import './PostJob.css'

const PostJob = () => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		company:"",
    skillsRequired: "",
		location: "",
		salaryRange: "",
		
	})

const { auth } = useAuth();
const navigate = useNavigate();
const [showSuccessDialog, setShowSuccessDialog] = useState(false);

	const [status, setStatus] = useState({ success: "", error: "" })

	const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const token = auth.token// JWT token
			const employerId = auth.userId
      console.log("Token from Auth Context:", token);
			const res = await axios.post(
				`${import.meta.env.VITE_CLIENT_URL}/api/jobs/create-job`,
        
				{
					...formData,
					skillsRequired: formData.skillsRequired
						.split(",").map((skill) => skill.trim())
				},
        {
					headers: { Authorization: `Bearer ${token}` }
				}
				
			)

    if (res.data && res.data.success) {
  setStatus({ success: "Job posted successfully!", error: "" });
  setFormData({
    title: "",
    description: "",
    company: "",
    skillsRequired: "",
    location: "",
    salaryRange: ""
  });
  setShowSuccessDialog(true);
 // navigate('/my-jobs');
} else {
  setStatus({
    success: "",
    error: res.data.message || "Something went wrong.",
  });
}
		} catch (err) {
			console.error("Post Job Error:", err.response?.data || err.message);
			setStatus({
				success: "",
				error: err.response?.data?.message || "Something went wrong.",
			})
		}
	}

return (
  <div className="post-job-container container d-flex justify-content-center align-items-center style={{ minHeight: '100vh', padding: 0 }}">
  <div className="post-job-card p-2 shadow-sm w-100" style={{ maxWidth: '500px' }}>
    <h5 className="mb-4 text-center text-primary fw-bold">Post a New Job</h5>

    <form onSubmit={handleSubmit}>
      {/* Each field below uses glossy form styling */}
      <div className="mb-3">
        <label className="form-label small">Job Title</label>
        <input
          type="text" name="title" value={formData.title}
          onChange={handleChange}
          placeholder="Enter job title"
          required
          className="form-control glossy-input"
        />
      </div>

      <div className="mb-3">
        <label className="form-label small">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter job description"
          required
          className="form-control glossy-input"
          rows={3}
        />
      </div>

      <div className="mb-3">
        <label className="form-label small">Company Name</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company name"
          required
          className="form-control glossy-input"
        />
      </div>

      <div className="mb-3">
        <label className="form-label small">Skills Required</label>
        <input
          type="text"
          name="skillsRequired"
          value={formData.skillsRequired}
          onChange={handleChange}
          placeholder="e.g. React, Node"
          required
          className="form-control glossy-input"
        />
      </div>

      <div className="mb-3">
        <label className="form-label small">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
          className="form-control glossy-input"
        />
      </div>

      <div className="mb-4">
        <label className="form-label small">Salary Range</label>
        <input
          type="text" name="salaryRange" value={formData.salaryRange}
          onChange={handleChange}
          placeholder="₹6LPA - ₹10LPA"
          className="form-control glossy-input"
        />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn glossy-btn w-50"> Post Job </button>
        <button type="button" className="btn glossy-outline-btn w-50" 
        onClick={() => navigate('/my-jobs')}>Cancel</button>
      </div>
    </form>
    {showSuccessDialog && (
  <div
    className="modal-backdrop show"
    style={{
      zIndex: 1050,
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      opacity:1
    }}
  >
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{
        zIndex: 1060,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            background: '#fff',
            color: '#111',
            borderRadius: '12px',
            boxShadow: '0 4px 32px rgba(0,0,0,0.1)',
            opacity:1
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title text-success">Success</h5>
          </div>
          <div className="modal-body">
            <p>Job posted successfully!</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              style={{ background: '#2563eb', borderColor: '#2563eb' }}
              onClick={() => {
                setShowSuccessDialog(false);
                navigate('/employer-dashboard/my-jobs');
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    {status.success && (
      <div className="alert alert-success mt-3 small">{status.success}</div>
    )}
    {status.error && (
      <div className="alert alert-danger mt-3 small">{status.error}</div>
    )}
  </div>
</div>
);
}

export default PostJob
