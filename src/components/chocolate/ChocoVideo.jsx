// src/components/hero/HeroVideo.jsx
import React from "react";
import chocolate from "../../assets/videos/chocolate.mp4";

const ChocoVideo = () => {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        src={chocolate}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* затемнение */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
        }}
      />

      {/* текст поверх */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px" }}>Grisel Family Chocolates </h1>
        <p style={{ fontSize: "20px" }}>
          С любовью с 1976 года.
        </p>
      </div>
    </section>
  );
};

export default ChocoVideo;
