// src/features/cart/CartDrawer.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

import {
  selectCartItems,
  selectCartOpen,
  removeItem,
  increaseItem,
  decreaseItem,
  closeCart,
} from "./cartSlice";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isOpen = useSelector(selectCartOpen);

  // Вычисляем итоговую сумму
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Обработчик оформления заказа (вынесли из JSX)
  const handleCheckout = () => {
    Swal.fire({
      title: "Заказ оформлен 🎉",
      text: "Спасибо за покупку!",
      icon: "success",
      confirmButtonText: "Отлично",
      confirmButtonColor: "#f01b1b",
      background: "#fffaf4",
    });
  };

  // Ранний возврат, если корзина закрыта
  if (!isOpen) return null;

  return (
    <div style={styles.drawer}>
      <button onClick={() => dispatch(closeCart())} style={styles.closeDrawerBtn}>
        Закрыть ×
      </button>

      <h2>Корзина</h2>

      {cartItems.length === 0 ? (
        <p>Корзина пуста 😔</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              
              <div style={styles.itemInfo}>
                <p>{item.name}</p>
                <p>{item.price} KZT</p>
                
                <div style={styles.quantityControls}>
                  <button 
                    onClick={() => dispatch(decreaseItem(item.id))}
                    aria-label="Уменьшить количество"
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => dispatch(increaseItem(item.id))}
                    aria-label="Увеличить количество"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                onClick={() => dispatch(removeItem(item.id))} 
                aria-label="Удалить товар"
              >
                ×
              </button>
            </div>
          ))}

          <h3>Итого: {total} KZT</h3>
          
          <button className="checkout-btn" onClick={handleCheckout}>
            Оформить заказ
          </button>
        </>
      )}
    </div>
  );
};

// Выносим стили вниз, чтобы они не мешали читать структуру компонента
const styles = {
  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "350px",
    height: "100%",
    background: "#fff",
    boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
    padding: "20px",
    zIndex: 1000,
    overflowY: "auto",
  },
  closeDrawerBtn: { 
    marginBottom: "20px", 
    cursor: "pointer" 
  },
  cartItem: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    alignItems: "center",
  },
  itemImage: { 
    width: "60px", 
    height: "60px", 
    objectFit: "cover", 
    borderRadius: "8px" 
  },
  itemInfo: { 
    flex: 1 
  },
  quantityControls: { 
    display: "flex", 
    alignItems: "center", 
    gap: "5px" 
  },
};

export default CartDrawer;