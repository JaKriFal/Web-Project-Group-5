import { useArtworkContext } from "../hooks/useArtworkContext";

const ImageUploader = () => {
  const { images, dispatch } = useArtworkContext();

  function handleDeleteImage(image) {
    dispatch({ type: "DELETE_IMAGE", payload: image });
  }

  return (
    <>
      <div className="assets-uploader">
        <label htmlFor="image-upload" className="image-container">
          <img src="https://placehold.co/250x150" alt="Upload Image" />
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
            <i className="fa fa-upload" />
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
                <span onClick={() => handleDeleteImage(image)}>X</span>
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
