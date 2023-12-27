import DefaultCompanyProfile from "../assets/User_box_duotone_yellow.svg";

const JobItem = ({ job, currentJob, setCurrentJob }) => {
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

export default JobItem;
