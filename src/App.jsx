import "./App.css";
import fruits from "./data/data";
import ProductsConatiner from "./Components/ProductsContainer";
function App() {
  return (
    <>
      <ProductsConatiner products={fruits} />
    </>
  );
}

export default App;
