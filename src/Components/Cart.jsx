import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Cart = () => {
  const [name, SetName] = useState("");
  const newLocal = <input
    type="text"
    placeholder="name"
    value={name}
    onChange={(e) => SetName(e.target.value)} />;
    const hel = <div>
      hello world
    </div>
  return (
    <>
      {newLocal}
      {hel}
    </>
  );
};

export default Cart;
