import React, { useState } from "react";

function ShoppingList({ items }) {
  // State variable to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler for category selection
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter items based on the selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span className="category">{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;