/*import React, { useState } from "react";
import ProductCard from "./ProductCard";

const CategoryAccordion = ({ category, products }) => {
  const [isOpen, setIsOpen] = useState(false);

  const filteredProducts = products.filter(p => p.category === category);

  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "#eee",
          padding: "10px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        {category} {isOpen ? "▲" : "▼"}
      </div>

      {isOpen && (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "10px" }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryAccordion;
*/