import { useArtworkFormContext } from "../hooks/useArtworkContext";

const ThumbnailUploader = () => {
  const { thumbnail, dispatch } = useArtworkFormContext();

  return (
    <>
      <div className="assets-uploader">
        <label htmlFor="thumbnail-upload" className="image-container">
          <img
            src={
              thumbnail
                ? URL.createObjectURL(thumbnail)
                : "https://placehold.co/150x100"
            }
            alt="Upload Thumbnail"
          />
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
          Upload Image
        </span>
      </label>
    </>
  );
};

export default ThumbnailUploader;
