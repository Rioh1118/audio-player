import React from "react";
import "./PlayBack.css";

function PlayBack() {
  return (
    <>
      <div className="button-container">
        <button className="svg-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="63"
            viewBox="0 0 44 63"
          >
            <path
              d="M19.035,6.006a4,4,0,0,1,6.929,0L41.539,33a4,4,0,0,1-3.465,6H6.926a4,4,0,0,1-3.465-6Z"
              transform="translate(5 58) rotate(-90)"
              fill="#0d1744"
            />
            <line
              y2="53"
              transform="translate(5 5)"
              fill="none"
              stroke="#0d1744"
              strokeLinecap="round"
              strokeWidth="10"
            />
          </svg>
        </button>
        <button className="svg-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="61"
            viewBox="0 0 53 61"
          >
            <path
              d="M27.033,6.024a4,4,0,0,1,6.934,0L57.55,47a4,4,0,0,1-3.467,6H6.917A4,4,0,0,1,3.45,47Z"
              transform="translate(53) rotate(90)"
              fill="#0d1744"
            />
          </svg>
        </button>
        <button className="svg-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44.5"
            height="63"
            viewBox="0 0 44.5 63"
          >
            <path
              d="M19.035,6.006a4,4,0,0,1,6.929,0L41.539,33a4,4,0,0,1-3.465,6H6.926a4,4,0,0,1-3.465-6Z"
              transform="translate(39 12.5) rotate(90)"
              fill="#0d1744"
            />
            <line
              y2="53"
              transform="translate(39.5 5)"
              fill="none"
              stroke="#0d1744"
              strokeLinecap="round"
              strokeWidth="10"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default PlayBack;
