import { Link } from "react-router-dom";
import "../styles/newpstyle.css";
import PathConstants from "../routes/pathConstants";
import React from "react";
import { useReducer } from "react";
import Card from "../components/Card";
import ImageUploader from "../components/ImageUploader";
import ThumbnailUploader from "../components/ThumbnailUploader";
import { useArtworkFormContext } from "../hooks/useArtworkContext";
import TagForm from "../components/TagForm";
import useAddArtwork from "../hooks/useAddArtwork";

export default function Nav() {
  const { title, description, dispatch } = useArtworkFormContext();
  const { addArtworkFetch } = useAddArtwork("http://localhost:4000/api/projects");

  const handleSubmit = (e) => {
    e.preventDefault();
    addArtworkFetch();
  };

  return (
    <div className="wrapper">
      <form
        className="container"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
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
                value={title}
                onChange={(e) =>
                  dispatch({
                    type: "TITLE_CHANGE",
                    payload: e.target.value,
                  })
                }
              />
            </Card>
            <Card>
              <div className="card-body">
                <ImageUploader />
              </div>
            </Card>
            <Card title="Artwork Description">
              <textarea
                name="description"
                placeholder="Artwork Description"
                value={description}
                onChange={(e) =>
                  dispatch({
                    type: "DESCRIPTION_CHANGE",
                    payload: e.target.value,
                  })
                }
              />
            </Card>
            <Card title="Artwork Tags">
              <TagForm />
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
