import "./LotusLoader.css";

function LotusLoader() {
  return (
    <div className="loader">
      <div className="logo-container">
        <img src="/Images/Ring.png" className="ring" alt="ring" />
        <img src="/Images/Lotus.png" className="lotus" alt="lotus" />
        <img src="/Images/Title.png" className="title" alt="title" />
      </div>
    </div>
  );
}

export default LotusLoader;