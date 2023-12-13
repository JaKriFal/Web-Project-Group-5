import "../styles/newjobstyle.css";
import React from "react";
import MainCard from "../components/MainCard";
import TagFormJob from "../components/TagFormJob";
import { useJobContext } from "../hooks/useJobContext";
import useJobFetch from "../hooks/useJobFetch";

export default function JobPosting() {
  const { position, description, skills, location, type, medium, dispatch } =
    useJobContext(TagFormJob);
  const { addJobFetch } = useJobFetch("/api/jobs");

  const handleSubmit = (e) => {
    e.preventDefault();
    addJobFetch();
  };

  return (
    <div className="wrapper-jobp">
      <form className="form-container" onSubmit={handleSubmit}>
        <MainCard title="Job Posting">
          <label htmlFor="position">* Job Position</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="E.g. Graphic Designer"
            value={position}
            onChange={(e) =>
              dispatch({
                type: "POSITION_CHANGE",
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="description">* Job Description</label>
          <textarea
            name="description"
            placeholder="Describe the job"
            id="description"
            value={description}
            onChange={(e) =>
              dispatch({
                type: "DESCRIPTION_CHANGE",
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="skills">* Skills & Requirements</label>
          <textarea
            name="skills"
            id="skills"
            placeholder="Describe required Skills & Requirements"
            value={skills}
            onChange={(e) =>
              dispatch({
                type: "SKILLS_CHANGE",
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="location">* Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="E.g. New York, NY"
            value={location}
            onChange={(e) =>
              dispatch({
                type: "LOCATION_CHANGE",
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="type">* Job Type</label>
          <input
            type="text"
            name="type"
            placeholder="E.g. Full-Time, Part-Time, Freelance, etc."
            value={type}
            onChange={(e) =>
              dispatch({
                type: "TYPE_CHANGE",
                payload: e.target.value,
              })
            }
          />
          <label htmlFor="medium">* Medium</label>
          <input
            type="text"
            name="medium"
            placeholder="E.g. Digital, Painting, Sculpture, etc."
            value={medium}
            onChange={(e) =>
              dispatch({
                type: "MEDIUM_CHANGE",
                payload: e.target.value,
              })
            }
          />
          <TagFormJob />
          <span className="btn">
            <input type="submit" value="Submit" id="submit" />
            Post
          </span>
        </MainCard>
      </form>
    </div>
  );
}
