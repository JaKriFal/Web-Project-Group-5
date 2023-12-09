import { Link } from "react-router-dom";
import "../styles/newpstyle.css";
import PathConstants from "../routes/pathConstants";
import React from "react";
import { useReducer } from "react";

function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <fieldset className="card-body">{children}</fieldset>
    </div>
  );
}

const initialValues = {
  title: "",
  description: "",
  tags: [],
  images: [],
  thumbnail: null,
};

const formReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "HANDLE_TITLE_CHANGE":
      return { ...state, title: action.payload };
    case "HANDLE_DESCRIPTION_CHANGE":
      return { ...state, description: action.payload };
    case "HANDLE_TAGS_CHANGE":
      return { ...state, tags: [...state.tags, action.payload] };
    case "REMOVE_TAG":
      const tags = state.tags.filter((tag, index) => index !== action.payload);
      return { ...state, tags: [...tags] };
    case "HANDLE_IMAGES_CHANGE":
      const files = Array.from(action.payload);
      return { ...state, images: [...files] };
    case "HANDLE_THUMBNAIL_CHANGE":
      return { ...state, thumbnail: action.payload };
    case "RESET_FORM":
      return initialValues;
    default:
      return state;
  }
};

export default function Nav() {
  const [state, dispatch] = useReducer(formReducer, initialValues);

  function handleTags(e) {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const tag = e.target.value;
    if (!tag.trim()) return;
    dispatch({ type: "HANDLE_TAGS_CHANGE", payload: tag });
    e.target.value = "";
  }

  function removeTag(index) {
    dispatch({ type: "REMOVE_TAG", payload: index });
  }

  function ImageUploader() {
    return (
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
                  type: "HANDLE_IMAGES_CHANGE",
                  payload: e.target.files,
                });
              }}
            />
            <i className="fa fa-upload" />
            Upload Image
          </span>
        </label>
      </div>
    );
  }

  function ThumbnailUploader() {
    return (
      <>
        <div className="assets-uploader">
          <label htmlFor="thumbnail-upload" className="image-container">
            <img
              src={
                state.thumbnail
                  ? URL.createObjectURL(state.thumbnail)
                  : "https://placehold.co/150x100"
              }
              alt="Upload Thumbnail"
              style={{ width: "200px", height: "150px" }}
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
                  type: "HANDLE_THUMBNAIL_CHANGE",
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
  }

  return (
    <div className="wrapper">
      <form className="container" encType="multipart/form-data">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Manage Portfolio</a>
          </li>
          <li className="breadcrumb-item active">/ Create New Artwork</li>
        </ol>
        <h2>Untitled</h2>
        <div className="row">
          <div className="left-column">
            <Card title="Artwork Title">
              <input
                type="text"
                name="title"
                placeholder="What is your artwork called?"
                value={state.title}
                onChange={(e) =>
                  dispatch({
                    type: "HANDLE_TITLE_CHANGE",
                    payload: e.target.value,
                  })
                }
              />
            </Card>
            <Card>
              <div className="card-body">
                <ImageUploader />
                {state.images &&
                  state.images.map((image) => (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Uploaded Image"
                      width="250"
                      height="150"
                    />
                  ))}
              </div>
            </Card>
            <Card title="Artwork Description">
              <textarea
                name="description"
                placeholder="Artwork Description"
                value={state.description}
                onChange={(e) =>
                  dispatch({
                    type: "HANDLE_DESCRIPTION_CHANGE",
                    payload: e.target.value,
                  })
                }
              />
            </Card>
            <Card title="Artwork Tags">
              <input
                type="text"
                name="tags"
                placeholder="Add tags to your artwork"
                onKeyDown={handleTags}
              />
              <div className="tags">
                {state.tags &&
                  state.tags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                      <span className="tag-text">{tag}</span>
                      <span
                        className="tag-remove"
                        onClick={() => removeTag(index)}
                      >
                        X
                      </span>
                    </div>
                  ))}
              </div>
            </Card>
          </div>
          <div className="right-column">
            <Card title="Project Thumbnail">
              <ThumbnailUploader />
            </Card>
            <Card title="Submit">
              <label htmlFor="submit">
                <span className="btn">
                  <input type="submit" value="Submit" id="submit" />
                  Submit
                </span>
              </label>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
