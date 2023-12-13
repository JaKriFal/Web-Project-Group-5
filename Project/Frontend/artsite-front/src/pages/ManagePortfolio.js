import "../styles/managepstyle.css";
import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";

export default function ManagePortfolio() {
  const PortfolioItem = (props) => {
    return (
      <div className="portfolio-item">
        <img src="https://placehold.co/220x220" />
        <h4>{props.title}</h4>
      </div>
    );
  };

  return (
    <div className="wrapper-managep">
      <h1>Manage Portfolio</h1>
      <div className="portfolio-container">
        <div className="portfolio-items-container">
          <Link to={PathConstants.NEW} className="portfolio-new">
            <h4>
              <span>+</span> Create New Project
            </h4>
          </Link>
          <PortfolioItem title="Project 1" />
          <PortfolioItem title="Project 2" />
        </div>
      </div>
    </div>
  );
}
