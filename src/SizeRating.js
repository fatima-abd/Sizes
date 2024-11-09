import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  width: "25%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "100px",
  backgroundColor: "#a2ab58",
  padding: "30px",
  borderRadius: "50px",
  fontSize: "16px",
};

const sizecontainerStyle = {
  display: "flex",
  gap: "8px",
};

const TextStyle = {
  lineHeight: "1.5",
  margin: "0px",
  color: "#fff",
  fontWeight: "bold",
};
export default function SizeRating({ maxRating, messages = [] }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }
  return (
    <div style={containerStyle}>
      <div style={sizecontainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Sizes
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 2)}
            onHoverIn={() => setTempRating(i + 2)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}{" "}
      </div>
      <p style={TextStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || tempRating || ""}
      </p>
    </div>
  );
}

const sizeStyle = {
  display: "block",
  width: "48px",
  height: "48px",
  cursor: "pointer",
};

function Sizes({ onRate, onHoverIn, onHoverOut, full }) {
  return (
    <span
      role="button"
      style={sizeStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          // fill="#000"
          // stroke="#000"
        >
          <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          // fill="#000"
          // stroke="#000"
        >
          <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z" />
        </svg>
      )}
    </span>
  );
}
