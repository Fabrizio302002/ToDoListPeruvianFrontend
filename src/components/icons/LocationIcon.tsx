import React from "react";
import type { SVGProps } from "react";

const LocationIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="#622e76"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M9.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-3.072 2.994l7.314-9.252m-3.74 4.693L7.065 5.39m10.628 1.203l-8.336 9.979"></path>
        <path d="M17.591 6.376c.472.907.715 1.914.709 2.935a7.3 7.3 0 0 1-.72 3.18a19 19 0 0 1-2.089 3c-.784.933-1.49 1.93-2.11 2.98c-.314.62-.568 1.27-.757 1.938c-.121.36-.277.591-.622.591c-.315 0-.463-.136-.626-.593a10.6 10.6 0 0 0-.779-1.978a18 18 0 0 0-1.423-2.091c-.877-1.184-2.179-2.535-2.853-4.071A7.1 7.1 0 0 1 5.7 9.3a6.23 6.23 0 0 1 1.476-4.055A6.25 6.25 0 0 1 11.987 3a6.5 6.5 0 0 1 1.918.284a6.26 6.26 0 0 1 3.686 3.092"></path>
      </g>
    </svg>
  );
};

export default LocationIcon;
