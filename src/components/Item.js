import set from "date-fns/set";
import React, { useState } from "react";

function Item({ name, category }) {
  const [isIncart, setIncart] = useState(false);

  function handleClick(){
    setIncart((isIncart) => !isIncart)
  }
  const itemclass = isIncart ? "in-cart" : "Remove From Cart";
  return (
    <li className={itemclass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isIncart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
