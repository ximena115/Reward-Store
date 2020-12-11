import kite from "../assets/aerolab-logo.svg";
import coin from "../assets/icons/coin.svg";
import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="bar">
      <img src={kite} alt="kite" height="36" width="36" />
      <div className="info">
        <h3>user name</h3>
        <div className="coin">
          <img src={coin} alt="coin" height="36" width="36" />
          <p>$$$$$$</p>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
