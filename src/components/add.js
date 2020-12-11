import coin from "../assets/icons/coin.svg";
import "./menu.css"

const Add = () => {
  return (
    <div className="menu">
      <p>Add coins</p>
      <div className="buttonContainer">
        <button>
          <img src={coin} alt="coin" height="36" width="36" />
          5000
        </button>
        <button>
          <img src={coin} alt="coin" height="36" width="36" />
          7000
        </button>
        <button>
          <img src={coin} alt="coin" height="36" width="36" />
          9000
        </button>
      </div>
    </div>
  );
};
export default Add;
