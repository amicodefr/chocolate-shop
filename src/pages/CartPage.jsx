// CartPage.jsx
import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  removeItem,
  updateQuantity,
  clearCart,
} from "../features/cart/cartSlice";
import "./CartPage.css";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const formattedTotal = total.toLocaleString("ru-KZ") + " ₸";

  const handleQuantityChange = (id, newQuantity) => {
    const quantity = Math.max(1, parseInt(newQuantity) || 1);
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    if (window.confirm("Вы действительно хотите очистить всю корзину?")) {
      dispatch(clearCart());
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty">
        <div className="empty-state">
          <h2>Корзина пуста</h2>
          <p>Добавьте что-нибудь вкусное из меню 🍫</p>
          <button 
            className="btn-primary"
            onClick={() => window.history.back()}
          >
            Вернуться в меню
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Корзина</h1>
        <span className="items-count">({cartItems.length} товара)</span>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} loading="lazy" />

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="price">
                {(item.price * item.quantity).toLocaleString("ru-KZ")} ₸
              </p>
            </div>

            <div className="cart-item-controls">
              <div className="quantity-wrapper">
                <button
                  className="quantity-btn"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  disabled={item.quantity === 1}
                >
                  –
                </button>

                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className="quantity-input"
                />

                <button
                  className="quantity-btn"
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(item.id))}
                aria-label={`Удалить ${item.name}`}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">
          <span>Итого:</span>
          <strong>{formattedTotal}</strong>
        </div>

        <div className="cart-actions">
          <button 
            className="clear-cart-btn"
            onClick={handleClearCart}
          >
            Очистить корзину
          </button>

          <button className="checkout-btn">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;