// src/features/products/ProductsGrid.jsx

import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const products = useSelector((state) => state.products.list || []);

  // Пока поиск полностью убран — показываем все товары
  const filteredProducts = products;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          Товары пока не загрузились или их нет 😢
        </p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductsGrid;