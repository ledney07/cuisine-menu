import React, { useState } from "react";
import Menu from "./Menu";
import items from "./mainData";
import Category from "./MenuCategories";
import "./App.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategory] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((newItem) => newItem.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Category filterItems={filterItems} categories={categories} />

        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
