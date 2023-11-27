import { Link } from "react-router-dom";
import "../styles/newpstyle.css";
import PathConstants from "../routes/pathConstants";

export default function Nav() {
  return (
    

    <div className="wrapper">
  <form className="container">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Manage Portfolio</a>
      </li>
      <li className="breadcrumb-item active">/ Create New Artwork</li>
    </ol>
    <h2>Untitled</h2>
    <div className="row">
      <div className="left-column">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Artwork Title</h4>
          </div>
          <fieldset className="card-body">
            <input
              type="text"
              name="title"
              placeholder="What is your artwork called?"
            />
          </fieldset>
        </div>
        <div className="card">
          <div className="card-body">
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
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Artwork Description</h4>
          </div>
          <fieldset className="card-body">
            <textarea
              name="description"
              placeholder="Artwork Description"
              defaultValue={""}
            />
          </fieldset>
        </div>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Artwork Tags</h4>
          </div>
          <fieldset className="card-body">
            <input
              type="text"
              name="tags"
              placeholder="Add tags to your artwork"
            />
          </fieldset>
        </div>
      </div>
      <div className="right-column">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Project Thumbnail</h4>
          </div>
          <fieldset className="card-body">
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
          </fieldset>
        </div>
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Submit</h4>
          </div>
          <fieldset className="card-body">
            <label htmlFor="submit">
              <span className="btn">
                <input type="submit" defaultValue="Submit" id="submit" />
                Submit
              </span>
            </label>
          </fieldset>
        </div>
      </div>
    </div>
  </form>
</div>


  );
}