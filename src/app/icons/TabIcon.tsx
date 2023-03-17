import React from "react";

function TabIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_70_30" fill="white">
        <path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4Z" />
      </mask>
      <path
        d="M0 4C0 2.34315 1.34315 1 3 1H21C22.6569 1 24 2.34315 24 4L20 5H4L0 4ZM24 20C24 21.6569 22.6569 23 21 23H3C1.34315 23 0 21.6569 0 20L4 19H20L24 20ZM3 23C1.34315 23 0 21.6569 0 20V4C0 2.34315 1.34315 1 3 1L4 5V19L3 23ZM21 1C22.6569 1 24 2.34315 24 4V20C24 21.6569 22.6569 23 21 23L20 19V5L21 1Z"
        fill="currentColor"
        mask="url(#path-1-inside-1_70_30)"
      />
      <line
        x1="3"
        y1="10"
        x2="20"
        y2="10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M5 7H9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default TabIcon;
