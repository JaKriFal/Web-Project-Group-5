import { useState, useEffect } from "react";
import "../styles/jobstyle.css";
import { useJobGetAllContext } from "../hooks/useJobContext";
import JobItem from "../components/JobItem";
import JobDetails from "../components/JobDetails";
import DefaultCompanyProfile from "../assets/User_box_duotone_yellow_bigger.svg";
import DefaultCompanyBanner from "../assets/cubes-1920.jpg";

const placeholderJobs = [
  {
    _id: 1,
    position: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod ultricies felis, id lacinia nunc tincidunt id.",
    skills: "JavaScript, React, CSS.",
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

export default function Company() {
  const { jobs, dispatch } = useJobGetAllContext();
  const [currentJob, setCurrentJob] = useState(placeholderJobs[0]);

  useEffect(() => {
    console.log(currentJob);
    dispatch({ type: "SET_JOBS", payload: placeholderJobs });

    if (jobs) {
      setCurrentJob(jobs[0]);
    }
  }, [jobs]);

  return (
    <div className="company-page">
      <div
        className="company-banner"
        style={{ backgroundImage: `url(${DefaultCompanyBanner})` }}
      >
        <div className="company-banner-overlay"></div>
      </div>
      <div className="company-page-wrapper">
        <div className="company-container">
          <div className="company-info-header">
            <img src={DefaultCompanyProfile} alt="company profile" />
            <div className="company-info-header-text">
              <h1>Company Name</h1>
              <p>Location</p>
            </div>
          </div>
          <div className="company-info-body">
            <h2>About</h2>
            <p>Company Description</p>
          </div>
        </div>
        <div className="columncontainer">
          <ul className="jobs-listing">
            {jobs &&
              jobs.map((job) => (
                <JobItem
                  key={job._id}
                  job={job}
                  currentJob={currentJob}
                  setCurrentJob={setCurrentJob}
                />
              ))}
          </ul>
          <JobDetails currentJob={currentJob} />
        </div>
      </div>
    </div>
  );
}
