import TagsJob from "../components/TagsJob";

const JobDetails = ({ currentJob }) => {
  return (
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
  );
};

export default JobDetails;
