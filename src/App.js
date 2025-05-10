import React, { useState } from "react";
import ShirtViewer from "./ShirtViewer";

const COLORS = [
  "#e74c3c", "#27ae60", "#2980b9", "#f1c40f", "#ecf0f1",
  "#222", "#8e44ad", "#e67e22", "#fd79a8", "#00b894",
  "#16a085", "#d35400", "#c0392b", "#2c3e50", "#f39c12",
  "#7f8c8d", "#34495e", "#1abc9c", "#9b59b6", "#2ecc71"
];

const MODELS = [
  {
    id: "shirt",
    name: "T-Shirt",
    preview: "https://cdn-icons-png.flaticon.com/512/3531/3531766.png",
    model: "/free_shirt.glb"
  },
  {
    id: "men_blazer",
    name: "Men's Blazer",
    preview: " https://cdn-icons-png.flaticon.com/512/2390/2390045.png ",
    model: "/suit_jacket.glb"
  }
];

export default function App() {
  const [color, setColor] = useState(COLORS[0]);
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Inter', Arial, sans-serif",
        background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 340,
          minWidth: 260,
          background: "rgba(255,255,255,0.25)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRight: "1.5px solid rgba(255,255,255,0.18)",
          padding: "2.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{
          fontWeight: 800,
          fontSize: 30,
          marginBottom: 32,
          color: "#222",
          letterSpacing: 1,
          textShadow: "0 2px 8px #e0e7ef"
        }}>
          Shirt Customizer
        </h1>

        {/* Model Selection */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 16,
            color: "#222"
          }}>
            Select Model
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}>
            {MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: selectedModel.id === model.id ? "3px solid #fff" : "2px solid rgba(255,255,255,0.3)",
                  borderRadius: 12,
                  cursor: "pointer",
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.18s cubic-bezier(.4,2,.6,1)",
                  transform: selectedModel.id === model.id ? "scale(1.05)" : "scale(1)",
                }}
              >
                <img
                  src={model.preview}
                  alt={model.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 8,
                    objectFit: "cover"
                  }}
                />
                <span style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#222"
                }}>
                  {model.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <h2 style={{
          fontSize: 20,
          fontWeight: 600,
          marginBottom: 16,
          color: "#222"
        }}>
          Select Fabric
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{
                background: c,
                border: color === c ? "3px solid #fff" : "2px solid rgba(255,255,255,0.3)",
                width: 44,
                height: 44,
                borderRadius: 12,
                cursor: "pointer",
                boxShadow: color === c ? "0 4px 16px #b0bec5" : "0 2px 8px #e0e7ef",
                outline: "none",
                transform: color === c ? "scale(1.12)" : "scale(1)",
                transition: "all 0.18s cubic-bezier(.4,2,.6,1)",
                position: "relative",
                zIndex: 1,
              }}
              aria-label={c}
              tabIndex={0}
              onMouseOver={e => e.currentTarget.style.filter = "brightness(1.15) drop-shadow(0 0 8px #fff8)"}
              onMouseOut={e => e.currentTarget.style.filter = "none"}
              onFocus={e => e.currentTarget.style.filter = "brightness(1.15) drop-shadow(0 0 8px #fff8)"}
              onBlur={e => e.currentTarget.style.filter = "none"}
            />
          ))}
        </div>
        <div
          style={{
            marginTop: 8,
            padding: "10px 0",
            borderRadius: 10,
            background: "rgba(255,255,255,0.45)",
            textAlign: "center",
            fontWeight: 700,
            fontSize: 20,
            color: "#222",
            letterSpacing: 1,
            border: "1.5px solid rgba(255,255,255,0.18)",
            boxShadow: "0 2px 8px #e0e7ef",
            userSelect: "all",
            transition: "background 0.2s"
          }}
        >
          {color.toUpperCase()}
        </div>
        <div style={{ marginTop: 40, color: "#888", fontSize: 15, fontWeight: 500 }}>
          <p>
            Select a model and color to customize your shirt!
          </p>
        </div>
      </aside>

      {/* 3D Model Area */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.35)",
            borderRadius: 32,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
            padding: 36,
            width: 540,
            height: 540,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.18)",
          }}
        >
          <ShirtViewer color={color} modelPath={selectedModel.model} />
        </div>
      </main>
    </div>
  );
}