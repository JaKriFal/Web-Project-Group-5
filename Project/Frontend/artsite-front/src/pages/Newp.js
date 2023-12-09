import { Link } from "react-router-dom";
import "../styles/newpstyle.css";
import PathConstants from "../routes/pathConstants";
import React from "react";

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

function ImageUploader() {
  return (
    <div className="assets-uploader">
      <label htmlFor="image-upload" className="image-container">
        <img src="https://placehold.co/250x150" alt="Upload Image" />
        <span className="btn">
          <input
            type="file"
            id="image-upload"
            name="asset[image]"
            multiple=""
            accept="image/png,image/jpeg"
          />
          <i className="fa fa-upload" />
          Upload Image
        </span>
      </label>
    </div>
  );
}

export default function Nav() {
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
                defaultValue={""}
              />
            </Card>
            <Card title="Artwork Tags">
              <input
                type="text"
                name="tags"
                placeholder="Add tags to your artwork"
              />
            </Card>
          </div>
          <div className="right-column">
            <Card title="Project Thumbnail">
              <div className="assets-uploader">
                <label htmlFor="image-upload" className="image-container">
                  <img src="https://placehold.co/150x100" alt="Upload Image" />
                </label>
              </div>
              <label htmlFor="image-upload">
                <span className="btn">
                  <input
                    type="file"
                    id="image-upload"
                    name="asset[image]"
                    multiple=""
                    accept="image/png,image/jpeg"
                  />
                  <i className="fa fa-upload" />
                  Upload Image
                </span>
              </label>
            </Card>
            <Card title="Submit">
              <label htmlFor="submit">
                <span className="btn">
                  <input type="submit" defaultValue="Submit" id="submit" />
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
