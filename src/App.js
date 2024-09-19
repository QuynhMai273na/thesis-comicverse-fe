import logo from "./assets/logo.svg";
import "./assets/App.css";
import ProductList from "./components/product/ProductList/ProductList";
import ProductForm from "./components/product/ProductForm/ProductForm";
import React, { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleProductAdded = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger re-render
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

      <div>
        <ProductList key={refresh} />
        <ProductForm onProductAdded={handleProductAdded} />
      </div>
    // </div>
  );
}

export default App;
