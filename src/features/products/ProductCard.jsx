// src/features/products/ProductsGrid.jsx

import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import { selectProductsLoading } from "./productsSlice";   // ← добавь

const ProductsGrid = () => {
  const products = useSelector((state) => state.products.list || []);
  const isLoading = useSelector(selectProductsLoading);

  const filteredProducts = products.filter((product) => {
    if (!query.trim()) return true;

    const q = query.toLowerCase().trim();

    return (
      (product.name || "").toLowerCase().includes(q) ||           // ← главное
      (product.title || "").toLowerCase().includes(q) ||         // на всякий случай
      (product.description || "").toLowerCase().includes(q)
    );
  });

  if (isLoading) {
    return <p style={{ textAlign: "center", margin: "40px 0" }}>Загрузка вкусняшек...</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          Ничего не найдено по запросу «{query}» 😢
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