import "./menu.css";

const Filter = () => {
  return (
    <div className="menu">
      <p>Sort by</p>
      <div className="buttonContainer">
        <button>Most recent </button>
        <button>Lowest price </button>
        <button>Highest price </button>
      </div>
    </div>
  );
};
export default Filter;
