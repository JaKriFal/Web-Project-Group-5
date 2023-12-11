import "../styles/managepstyle.css";

export default function ManagePortfolio() {
  const handleNewProject = () => {
    console.log("New Project");
  };

  const PortfolioItem = (props) => {
    return (
      <div className="portfolio-item">
        <img src="https://placehold.co/150x100" />
        <h4>{props.title}</h4>
      </div>
    );
  };

  return (
    <div className="wrapper">
      <h1>Manage Portfolio</h1>
      <div className="portfolio-container">
        <div className="portfolio-new" onClick={handleNewProject}>
          <h4>
            <span>+</span> Create New Project
          </h4>
        </div>
        <PortfolioItem title="Project 1" />
      </div>
    </div>
  );
}
