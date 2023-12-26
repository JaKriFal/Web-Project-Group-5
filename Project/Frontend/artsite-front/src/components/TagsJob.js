import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const TagsJob = ({ location, type, medium, tags }) => (
  <div className="tags-job">
    {location && (
      <div className="tag-item-job">
        <FontAwesomeIcon icon={faGlobe} />
        <span className="tag-text">{location}</span>
      </div>
    )}
    {type && (
      <div className="tag-item-job">
        <FontAwesomeIcon icon={faSuitcase} />
        <span className="tag-text">{type}</span>
      </div>
    )}
    {medium && (
      <div className="tag-item-job">
        <FontAwesomeIcon icon={faGraduationCap} />
        <span className="tag-text">{medium}</span>
      </div>
    )}
    {tags &&
      tags.map((tag, index) => (
        <div className="tag-item-job" key={index}>
          <span className="tag-text">{tag}</span>
        </div>
      ))}
  </div>
);

export default TagsJob;
