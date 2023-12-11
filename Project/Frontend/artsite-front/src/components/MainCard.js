const MainCard = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
      </div>
      <fieldset className="card-body">{children}</fieldset>
    </div>
  );
};

export default MainCard;
