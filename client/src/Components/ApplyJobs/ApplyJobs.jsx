import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


const JobApplication = ({ isModalOpen, setIsModalOpen, selectedJob }) => {
  const [jobId, setJobId] = useState(null);

  useEffect(() => {
    const storedJobId = localStorage.getItem("jobId");
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
      formData.append("jobId", jobId);

      const response = await axios.post(`http://localhost:5000/api/application/${jobId}`, formData);
      alert("Application submitted successfully!");
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              style={{ fontSize: '50px', marginTop:"-20px" }}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              &times;
            </button>

            <strong className="text-2xl font-semibold  mb-5 text-gray-800">Apply for {selectedJob.title} role</strong>

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
                      className="w-full border border-gray-300 p-2 rounded"
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
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200" style={{ backgroundColor: "rgb(110, 0, 190)" }}
                  >
                    Submit Application
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default JobApplication;
