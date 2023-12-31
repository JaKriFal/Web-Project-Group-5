import { useArtworkContext } from "../hooks/useArtworkContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ImageUploader = () => {
  const { images, dispatch } = useArtworkContext();

  function handleDeleteImage(image) {
    dispatch({ type: "DELETE_IMAGE", payload: image });
  }

  return (
    <>
      <div className="assets-uploader">
        <label htmlFor="image-upload" className="image-container">
          <div className="image-overlay">
            <FontAwesomeIcon icon={faImage} size="2xl" className="image-icon" />
          </div>
          <span className="btn">
            <input
              type="file"
              id="image-upload"
              name="images"
              multiple
              accept="image/png,image/jpeg"
              onChange={(e) => {
                dispatch({
                  type: "IMAGES_CHANGE",
                  payload: e.target.files,
                });
              }}
            />
            <FontAwesomeIcon icon={faArrowUp} className="icon" />
            Upload Image
          </span>
        </label>
      </div>
      <div className="images-container">
        {images &&
          images.map((image, index) => (
            <div key={index} className="image-card">
              <div className="image-header">
                <p>{image.name}</p>
                <span onClick={() => handleDeleteImage(image)}>
                  <FontAwesomeIcon icon={faTrashCan} className="trash-icon" />
                </span>
              </div>
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded Image"
                width="250"
                height="150"
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default ImageUploader;
