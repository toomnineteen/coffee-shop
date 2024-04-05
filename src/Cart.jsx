/* eslint-disable react/prop-types */

import { ToastContainer } from "react-toastify";

const Cart = (props) => {
  const { order, total, hanlderRemove } =
    props;
  console.log("order", order);

  return (
    <main>
      <div>{order.length ? <h2>My Order : {order.length}</h2> : ""}</div>
      <div>
        {order.length ? (
          <ul className="ul-cart">
            {order?.map((item, index) => (
              <li key={index} className="li-myOrder">
                <div className="items">
                  <img src={item.productImg} alt="img" />
                  <div>
                    <p>{item.productName}</p>
                    <p>Price : {item.price} ฿</p>
                    <p>Quantity : {item.amount}</p>
                  </div>
                </div>
                <div className="btn-reandadd">
                  <button
                    style={{ background: "none" }}
                    onClick={() => hanlderRemove(index)}
                    className="btn-delete"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <h3 style={{ textAlign: "center", marginTop: "5rem" }}>
            My Order is empty
          </h3>
        )}
      </div>

      <div>{order.length ? <h3>Total : {total} ฿</h3> : ""}</div>

      <ToastContainer />
    </main>
  );
};

export default Cart;
