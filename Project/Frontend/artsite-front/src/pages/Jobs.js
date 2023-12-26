import TagsJob from "../components/TagsJob";
import DefaultCompanyProfile from "../assets/User_box_duotone_yellow.svg";
import { useState, useEffect } from "react";
import "../styles/jobslistingstyle.css";
import { useJobGetAllContext } from "../hooks/useJobContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const placeholderJobs = [
  {
    _id: 1,
    position: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod ultricies felis, id lacinia nunc tincidunt id.",
    skills: "JavaScript, React, CSS",
    location: "San Francisco, CA",
    type: "Full-time",
    medium: "Digital 2D",
    tags: ["JavaScript", "React", "CSS"],
  },
  {
    _id: 2,
    position: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id lacinia tincidunt, nunc nunc tincidunt urna, id luctus risus nisl id lectus.",
    skills: "UI/UX Design, Figma, Adobe XD",
    location: "New York, NY",
    type: "Part-time",
    medium: "Digital 3D",
    tags: ["UI/UX Design", "Figma", "Adobe XD"],
  },
  {
    _id: 3,
    position: "Backend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl id lacinia tincidunt, nunc nunc tincidunt urna, id luctus risus nisl id lectus.",
    skills: "Node.js, Express, MongoDB",
    location: "Seattle, WA",
    type: "Full-time",
    medium: "Digital 2D",
    tags: ["Node.js", "Express", "MongoDB"],
  },
];
// Add more placeholder jobs here if needed

export default function Jobs() {
  const { jobs, dispatch } = useJobGetAllContext();
  const [currentJob, setCurrentJob] = useState(placeholderJobs[0]);

  useEffect(() => {
    console.log(currentJob);
    dispatch({ type: "SET_JOBS", payload: placeholderJobs });

    if (jobs) {
      setCurrentJob(jobs[0]);
    }
  }, [jobs]);

  const JobItem = ({ job }) => {
    return (
      <div
        className={job === currentJob ? `job-item job-item-active` : `job-item`}
        onClick={() => setCurrentJob(job)}
      >
        <img
          src={job.profile ? `uploads/${job.profile}` : DefaultCompanyProfile}
          alt="company profile"
        />
        <div className="jobItem-body">
          <h3>{job.position}</h3>
          <p>{job.company ? job.company : `No company`}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <h2>Tags</h2>
      <div className="jobtags">
        <ul className="tagcontainer">
          <li>
            <a href="#">Job Listings</a>
          </li>
          <li>
            <a href="#">Saved Jobs</a>
          </li>
        </ul>
        <form className="searchbar" action="#">
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="text" placeholder="Search For Jobs.." name="search" />
        </form>
      </div>
      <div className="columncontainer">
        <ul className="jobs-listing">
          {jobs && jobs.map((job) => <JobItem key={job._id} job={job} />)}
        </ul>
        <div className="job-details">
          <div className="jobitem_header">
            <h3>Job Description</h3>
            <p>{currentJob && currentJob.description}</p>
          </div>

          <div className="jobitem_body">
            <h3>Skills & Requirements</h3>
            <p>{currentJob && currentJob.skills}</p>
          </div>
          <div className="main-buttons">
            <span className="apply-btn">Apply</span>
            <span className="save-btn">Save</span>
          </div>
          <div className="jobitem_footer">
            <TagsJob {...currentJob} />
          </div>
        </div>
      </div>
    </>
  );
}
