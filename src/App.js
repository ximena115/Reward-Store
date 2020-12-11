import UserInfo from "./components/UserInfo";
import Banner from "./components/banner";
import Menu from "./components/menu";
import ProductList from "./components/productList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserInfo></UserInfo>
      <Banner></Banner>
      <Menu></Menu>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
