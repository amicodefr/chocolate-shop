// src/features/categories/CategoriesBar.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../products/ProductCard";
import "./CategoriesBar.css";

// 1. Выносим массив из компонента. Теперь он создается в памяти ОДИН раз при запуске приложения.
const CATEGORIES = ["Шоколад", "Печенье", "Подарки", "Пирожные"];

// 2. Создаем отдельный компонент для дропдауна.
// Он будет фильтровать товары только тогда, когда это действительно нужно.
const CategoryDropdown = ({ category, products }) => {
  const filteredProducts = products.filter((p) => p.category === category);

  if (filteredProducts.length === 0) {
    return <div className="dropdown empty">Нет товаров в этой категории</div>;
  }

  return (
    <div className="dropdown">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const CategoriesBar = () => {
  const products = useSelector((state) => state.products.list);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="categories-wrapper">
      <div className="categories-bar">
        {CATEGORIES.map((cat) => (
          <div
            key={cat}
            className="category-item"
            onMouseEnter={() => setHoveredCategory(cat)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button className="category-btn">{cat}</button>

            {/* Код стал чище: логика отрисовки карточек ушла в под-компонент */}
            {hoveredCategory === cat && (
              <CategoryDropdown category={cat} products={products} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBar;