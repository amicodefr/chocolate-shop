
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../data/products";
import { addItem, selectCartItems, openCart } from "../features/cart/cartSlice";
import "./MenuPage.css";

const categories = ["Все", "Шоколад", "Печенье", "Подарки", "Пирожные"];

const MenuPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [quantities, setQuantities] = useState({});

  const filteredProducts =
    selectedCategory === "Все"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    dispatch(addItem({ ...product, quantity }));
    dispatch(openCart());
  };

  return (
    <div className="menu-page">
      <h1>Меню</h1>

      {/* Кнопки категорий */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Товары */}
      <div className="products-grid">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price} KZT</p>

            {/* Счётчик количества */}
            <div className="quantity-controls">
              <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>
                –
              </button>
              <span className="quantity-number">{quantities[item.id] || 1}</span>
              <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>
                +
              </button>
            </div>

            {/* Кнопка добавить в корзину */}
            <button className="btn" onClick={() => handleAddToCart(item)}>
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;