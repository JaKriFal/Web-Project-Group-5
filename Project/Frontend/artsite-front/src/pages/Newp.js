import { Link } from "react-router-dom";
import "../styles/newpstyle.css";
import React from "react";
import Card from "../components/Card";
import ImageUploader from "../components/ImageUploader";
import ThumbnailUploader from "../components/ThumbnailUploader";
import { useArtworkContext } from "../hooks/useArtworkContext";
import TagFormArtwork from "../components/TagFormArtwork";
import useArtworkFetch from "../hooks/useArtworkFetch";

export default function Nav() {
  const { title, description, dispatch } = useArtworkContext();
  const { addArtworkFetch } = useArtworkFetch("/api/artworks");

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
              <TagFormArtwork />
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
