import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";    //axios for posting req on server

const JobApplication = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [userId, setUserId] = useState(null);
  //const [employerId, setEmployerId] = useState(null);
  const [jobId, setJobId] = useState(null);

  useEffect(() => {
    // Get user, job , employer details from localStorage
    //const storedUserId = localStorage.getItem("userId");
    //const storedEmployerId = localStorage.getItem("employerId");
    const storedJobId = localStorage.getItem("jobId");

    //setUserId(storedUserId);
   // setEmployerId(storedEmployerId);
    setJobId(storedJobId);
  }, []);

  const initialValues = {
    resume: null,
    message: "",
  };

  const validationSchema = Yup.object({
    resume: Yup.mixed().required("Resume is required"),
    message: Yup.string().max(500, "Message can't be longer than 500 characters"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    
    try {
      const formData = new FormData();
      formData.append("resume", values.resume);
      formData.append("message", values.message);
      //formData.append("userId", userId);
      //formData.append("employerId", employerId);
      formData.append("jobId", jobId);

      // Replace with your actual endpoint
      const response = await axios.post(`http://localhost:5000/api/application/${jobId}`, formData);

      alert("Application submitted successfully!");
      console.log("Server response:", response.data);

      resetForm();
      setIsModalOpen(false); // Close the modal after submission
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Job Application</h1>
      <button 
        onClick={openModal} 
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Apply Now
      </button>

      {/* Job Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Apply for this Job</h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Upload Resume <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={(event) =>
                        setFieldValue("resume", event.currentTarget.files[0])
                      }
                      className="w-full border border-gray-300 p-2 rounded "
                    />
                    <ErrorMessage name="resume" component="div" className="text-red-500 text-1xl" />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-700">Message (Optional)</label>
                    <Field
                      as="textarea"
                      name="message"
                      rows="5"
                      placeholder="Write a brief message or cover letter..."
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
                  >
                    Submit Application
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplication;
