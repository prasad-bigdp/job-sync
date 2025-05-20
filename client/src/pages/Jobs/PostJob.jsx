import React, { useState } from "react"
import axios from "axios"
import { useAuth } from "../context/AuthContext";
  // this is basic post job

const { auth } = useAuth();

const PostJob = () => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		skillsRequired: "",
		location: "",
		salaryRange: "",
	})

	const [status, setStatus] = useState({ success: "", error: "" })

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}
	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const token = auth.token// JWT token
			const employerId = auth.userId

			const res = await axios.post(
				"/api/jobs",
				{
					...formData,
					skillsRequired: formData.skillsRequired
						.split(",")
						.map((skill) => skill.trim()),
					employer: employerId,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			)

			setStatus({ success: "Job posted successfully!", error: "" })
			setFormData({
				title: "",
				description: "",
				skillsRequired: "",
				location: "",
				salaryRange: "",
			})
		} catch (err) {
			setStatus({
				success: "",
				error: err.response?.data?.message || "Something went wrong.",
			})
		}
	}

	return (
		<div className='max-w-xl mx-auto p-4'>
			<h2 className='text-xl font-bold mb-4'>Post a New Job</h2>

			<form
				onSubmit={handleSubmit}
				className='space-y-4'>
				<input
					name='title'
					value={formData.title}
					onChange={handleChange}
					placeholder='Job Title'
					required
					className='w-full border p-2'
				/>
				<textarea
					name='description'
					value={formData.description}
					onChange={handleChange}
					placeholder='Description'
					required
					className='w-full border p-2'
				/>
				<input
					name='skillsRequired'
					value={formData.skillsRequired}
					onChange={handleChange}
					placeholder='Skills (comma-separated)'
					required
					className='w-full border p-2'
				/>
				<input
					name='location'
					value={formData.location}
					onChange={handleChange}
					placeholder='Location'
					className='w-full border p-2'
				/>
				<input
					name='salaryRange'
					value={formData.salaryRange}
					onChange={handleChange}
					placeholder='Salary Range'
					className='w-full border p-2'
				/>

				<button
					type='submit'
					className='bg-blue-600 text-white px-4 py-2'>
					Post Job
				</button>
			</form>

			{status.success && (
				<p className='text-green-600 mt-2'>{status.success}</p>
			)}
			{status.error && <p className='text-red-600 mt-2'>{status.error}</p>}
		</div>
	)
}

export default PostJob
