import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Menu from "./Menu";
import Categories from "./Categories";
import Title from "./Title";
import items from "./data";
import Contact from "./pages/Contact";
import Catering from "./pages/Catering";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div id="root">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <section className="menu">
                  <Title text="La Michoakna Menu" />
                  <Categories
                    categories={categories}
                    filterItems={filterItems}
                  />
                  <Menu items={menuItems} />
                </section>
              }
            />
            <Route
              path="/contact"
              element={
                <section className="menu">
                  <Title text="Hours" />
                  <Contact />
                </section>
              }
            />
            <Route
              path="/catering"
              element={
                <section className="menu">
                  <Title text="Catering" />
                  <Catering />
                </section>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
