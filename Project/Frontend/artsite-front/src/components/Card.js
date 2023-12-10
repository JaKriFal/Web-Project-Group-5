const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <fieldset className="card-body">{children}</fieldset>
    </div>
  );
};

export default Card;
