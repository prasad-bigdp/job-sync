import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const MobileSearchJobs = () => {
  const navigate = useNavigate();
  const [jobsQuery, setJobsquery] = useState("");
  const [locationQuery, setLocationquery] = useState("");
  const [expreinceQuery, setexperinceQuery] = useState("");
  useEffect(() => {
    if (window.innerWidth > 1024) {
      navigate("/");
    }
  }, [navigate]);
  const handlebacktoHome = () => {
    navigate("/");
  };
  const handleJobsSearchclick = () => {
    if (!jobsQuery || !locationQuery || !expreinceQuery) return null;
    navigate(`/search?query=${jobsQuery}&locations=${locationQuery}&experience=${expreinceQuery}`)
  };
  return (
    <div className="p-3 h-[100vh] relative">
      <div className="flex">
        <div>
          <ChevronLeft onClick={handlebacktoHome} />
        </div>
        <div>Search Jobs</div>
      </div>

      <div className="flex flex-col my-3 gap-3">
        <div>
          <input
            onChange={(e) => setJobsquery(e.target.value.toLowerCase())}
            type="text"
            className="outline-none border   w-full border-stone-300 rounded-[10px] ps-2 h-[50px] text-[15px] pe-4"
            placeholder="Search by Skills, Company or Job Title"
          />
        </div>
        <div>
          <input
            onChange={(e) => setLocationquery(e.target.value.toLowerCase())}
            type="text"
            className="border-l border   border-stone-300 outline-none rounded-[10px] h-[50px] text-[15px] ps-2 pe-4 w-full"
            placeholder="Loaction "
          />
        </div>
        <div>
          <input
            onChange={(e) => setexperinceQuery(e.target.value.toLowerCase())}
            type="text"
            className="border-l border   border-stone-300 outline-none rounded-[10px] h-[50px] text-[15px] ps-2 pe-4 w-full"
            placeholder="Experience "
          />
        </div>
      </div>
     
      <div className="absolute w-full left-0 bottom-[100px] px-3 ">
        <button
          onClick={handleJobsSearchclick}
          className="p-2   cursor-pointer text-white text-xl w-full  "
          style={{ backgroundColor: "#6E00BE",borderRadius:"10px" }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MobileSearchJobs;
