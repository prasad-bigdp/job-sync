import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import JobSearchBar from "./JobSearchinput";
import Footer from "./Footer"
import JobDetails from "./JobDetails";
import AllJobsListpannel from "./AllJobsPannel";
import NotFoundPage from "./NotFound";
import FilterJobs from "./Filterjobs";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("query") || "";
  const locationFilter = queryParams.get("locations") || "";
  const experienceFilter = queryParams.get("experience") || "";
  const [loading, setLoading] = useState(true);
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load jobs:", err);
      });
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesTitle = job.title
        .toLowerCase()
        .includes(search.toLowerCase());
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

  return (
    <div>
      <div className="sticky top-0 z-20 bg-white">
        <Header />
      </div>
      <JobSearchBar />
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="lg:p-4 overflow-hidden">
            {filteredJobs.length > 0 ? (
              <div className="w-full ">
                <FilterJobs />
                <h2 className="text-2xl font-bold mb-4 max-lg:ps-2">
                  Job Listings
                </h2>
                <div className="grid  lg:grid-cols-5 grid-cols-1  gap-4 ">
                  <div
                    className={`col-span-5 px-2 md:col-span-2 w-full  overflow-auto lg:h-[100vh]   jobsscrollbar-hide  ${
                      isSelected ? "max-lg:hidden" : "max-lg:block"
                    }`}
                  >
                    <AllJobsListpannel
                      selectedJob={selectedJob}
                      setSelected={setSelected}
                      setSelectedJob={setSelectedJob}
                      filteredJobs={filteredJobs}
                    />
                  </div>

                  <div

                   

                    className={`col-span-3 border  lg:h-[100vh] max-lg:pt-9  rounded-[10px] bg-white ${

                      isSelected
                        ? "max-lg:absolute max-lg:w-full"
                        : "max-lg:hidden"
                    } border-stone-300 max-lg:w-full shadow overflow-y-auto jobsscrollbar-hide lg:block top-6`}
                  >
                    {selectedJob ? (
                      <JobDetails
                        selectedJob={selectedJob}
                        isSelected={isSelected}
                        setSelected={setSelected}
                      />
                    ) : (
                      <p>Select a job to see details</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <NotFoundPage />
            )}
          </div>
        )}
      </div>

      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
}

export default JobList;


 

