import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlus, FaTimes, FaSave, FaArrowLeft } from "react-icons/fa";
import './EditJob.css';


const EditJobForm = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    location: '',
    salaryRange:'',
    skillsRequired: []
  });

  const [skillInput, setSkillInput] = useState('');

  useEffect(() => {
    axios.get(`CLIENT_URL/api/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setJobData({
           title: res.data.title || "",
           description: res.data.description || "",
           
            location: res.data.location || "",
        skillsRequired: res.data.skillsRequired || [],
      });
    }).catch(err => {
      console.error('Failed to load job', err);
    });
  }, [jobId, token]);

  
  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    if (skillInput.trim() && !jobData.skillsRequired.includes(skillInput.trim())) {
      setJobData(prev => ({
        ...prev,
        skillsRequired: [...prev.skillsRequired, skillInput.trim()]
      }));
    }
    setSkillInput('');
  };

  const removeSkill = (skillToRemove) => {
    setJobData(prev => ({
      ...prev,
      skillsRequired: prev.skillsRequired.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    axios.put(`CLIENT_URL/api/jobs/${jobId}`, jobData, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {
      alert('Job updated!');
      navigate('/my-jobs');
    }).catch(err => {
      console.error('Failed to update job', err);
    });
  };
  
  return (
    <div className="edit-job-container container mt-5 p-4">

    {/* <div className="container mt-5 p-4 border rounded shadow bg-light"> */}
      <h2 className="mb-4 text-primary">Edit Job</h2>
      
      <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              value={jobData.title}
              onChange={e => setJobData({ ...jobData, title: e.target.value })}
              placeholder="Job Title"
              required
            />
          </div>

        <div className="form-group mb-3">
          <textarea
            className="form-control"
            name="description"
            rows="4"
            value={jobData.description}
            onChange={e => setJobData({ ...jobData, description: e.target.value })}
            placeholder="Job Description"
            required
          />
        </div>

     
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            name="location"
            value={jobData.location}
            onChange={e => setJobData({ ...jobData, title: e.target.value })}
            placeholder="Location"
            required
          />
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={skillInput}
            onChange={e => setSkillInput(e.target.value)}
            placeholder="Add a skill"
          />
          <button type="button" className="btn btn-success" onClick={addSkill}>
            <FaPlus /> Add Skill
          </button>
        </div>

        <div className="mb-3">
          {jobData.skillsRequired.map(skill => (
            <span key={skill} className="skill-badge bg-secondary me-2 mb-2 p-2">
              {skill}{" "}
              <button
                type="button"
                className="remove-skill-btn "
                onClick={() => removeSkill(skill)}
              >
                <FaTimes className="text-danger" />
              </button>
            </span>
          ))}
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn glossy-btn me-2 btn btn-primary">
            <FaSave /> Update Job
          </button>
          <button
            type="button" className=" btn glossy-outline-btn" onClick={() => navigate("/my-jobs")}
          >
            <FaArrowLeft /> Cancel
          </button>
        </div>
      </form>
    {/* </div> */}
    </div>
  );
};

export default EditJobForm;
