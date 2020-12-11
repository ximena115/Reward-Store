import Filter from "./filter";
import Add from "./add.js";
import History from "./history"
import "./menu.css";


const Menu = () => {
    return(
        <div className="menuConatiner">
          <Filter></Filter>
          <Add></Add>
          <History></History> 
        </div>
    );
};
export default Menu;