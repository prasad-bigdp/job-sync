



import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function JobList() {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const search = queryParams.get('search') || '';
    const locationFilter = queryParams.get('location') || '';
    const experienceFilter = queryParams.get('experience') || '';

    useEffect(() => {
        fetch('/job.json')
            .then((res) => res.json())
            .then((data) => {
                setJobs(data.jobs);
            })
            .catch((err) => {
                console.error("Failed to load jobs:", err);
            });
    }, []);

    useEffect(() => {
        const filtered = jobs.filter((job) => {
            const matchesTitle = job.title.toLowerCase().includes(search.toLowerCase());
            const matchesLocation = locationFilter
                ? job.location.toLowerCase().includes(locationFilter.toLowerCase())
                : true;
            const matchesExperience = experienceFilter
                ? job.experience.toLowerCase().includes(experienceFilter.toLowerCase())
                : true;

            return matchesTitle && matchesLocation && matchesExperience;
        });

        setFilteredJobs(filtered);
        setSelectedJob(filtered[0] || null);
    }, [search, locationFilter, experienceFilter, jobs]);

    console.log(selectedJob)
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
            <div className='grid grid-cols-5 gap-4 h-[76vh]'>
                <div className='col-span-5 md:col-span-2 overflow-y-auto'>
                    {filteredJobs.length > 0 ? (
                        <div className="grid gap-4">
                            {filteredJobs.map((job) => (
                                <div
                                    key={job.id}
                                    onClick={() => setSelectedJob(job)}
                                    className={`p-4 border rounded shadow-sm cursor-pointer hover:bg-gray-50 ${
                                        selectedJob?.id === job.id ? 'bg-gray-100 border-blue-400' : ''
                                    }`}
                                >
                                    <h3 className="text-lg font-semibold">{job.title}</h3>
                                    <p className="text-gray-700 my-2">{job.company} - {job.location}</p>
                                    <p className="text-sm text-gray-500">{job.experience} • {job.salary} • {job.type}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No matching jobs found.</p>
                    )}
                </div>

                <div className='hidden col-span-3 border rounded p-6 shadow overflow-y-auto md:block'>
                    {selectedJob ? (
                        <>
                            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
                            <p className="text-gray-600 mb-1">{selectedJob.company} • {selectedJob.location}</p>
                            <p className="text-sm text-gray-500 mb-4">{selectedJob.experience} • {selectedJob.salary} • {selectedJob.type}</p>
                            <h4 className="text-lg font-semibold mt-4">Description</h4>
                            <p className="text-gray-700 mb-4">{selectedJob.description}</p>

                            <h4 className="text-lg font-semibold mt-4">Skills Required</h4>
                            <ul className="list-disc list-inside text-gray-700 mb-4">
                                {selectedJob.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>

                            {selectedJob.responsibility && (
                                <>
                                    <h4 className="text-lg font-semibold mt-4">Responsibilities</h4>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        {selectedJob.responsibility.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </>
                    ) : (
                        <p>Select a job to see details</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default JobList;