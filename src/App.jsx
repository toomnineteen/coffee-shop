import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Cart from "./Cart";
import Home from "./Home";

function App() {
  const [order, setOrder] = useState([]);

  const additemToOrder = (item) => {
    setOrder([...order, item]);
  };

  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price, 0);
  };

  const hanlderRemove = (index) => {
    const updatedItems = [...order];
    updatedItems.splice(index, 1); // Remove item at given index
    setOrder(updatedItems);
    console.log("remove", index);
  };

  return (
    <BrowserRouter>
      <div className="header-menu">
        <Link to="/">Cat_Coffee</Link>
        <Link to="/cart" className="menu-cart">
          <span className="material-symbols-outlined">shopping_bag</span> :{" "}
          {order.length}
        </Link>
      </div>
      <Routes>
        <Route index element={<Home additemToOrder={additemToOrder} />} />
        <Route
          path="/cart"
          element={
            <Cart
              order={order}
              total={calculateTotal()}
              hanlderRemove={hanlderRemove}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
