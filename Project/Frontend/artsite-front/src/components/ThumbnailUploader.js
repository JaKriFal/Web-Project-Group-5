import { useArtworkContext } from "../hooks/useArtworkContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ThumbnailUploader = () => {
  const { thumbnail, dispatch } = useArtworkContext();

  return (
    <>
      <div className="assets-uploader">
        <label htmlFor="thumbnail-upload" className="thumbnail-container">
          {thumbnail ? (
            <img
              src={URL.createObjectURL(thumbnail)}
              alt="Upload Thumbnail"
              className="thumbnail"
            />
          ) : (
            <FontAwesomeIcon icon={faImage} size="2xl" className="image-icon" />
          )}
        </label>
      </div>
      <label htmlFor="thumbnail-upload">
        <span className="btn">
          <input
            type="file"
            id="thumbnail-upload"
            name="thumbnail"
            accept="image/png,image/jpeg"
            onChange={(e) => {
              dispatch({
                type: "THUMBNAIL_CHANGE",
                payload: e.target.files[0],
              });
            }}
          />
          <i className="fa fa-upload" />
          <FontAwesomeIcon icon={faArrowUp} className="icon" /> Upload Image
        </span>
      </label>
    </>
  );
};

export default ThumbnailUploader;
