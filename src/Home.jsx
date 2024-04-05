/* eslint-disable react/prop-types */
import myProduct from "./data/mydata";

const Home = (props) => {
  const { additemToOrder } = props;

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Menu</h1>
      <div className="menu-order">
        <ul>
          {myProduct.map((item) => (
            <li key={item.id}>
              <img style={{ height: "150px" }} src={item.productImg} alt="" />
              <p>{item.productName}</p>
              <p>{item.price} ฿</p>
              <button
                className="btn-menu-order"
                onClick={() => additemToOrder(item)}
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
