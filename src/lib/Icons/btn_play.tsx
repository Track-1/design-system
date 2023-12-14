import { HTMLAttributes, forwardRef } from "react";

interface IconCheckProps extends HTMLAttributes<SVGSVGElement> {}

const BtnPlay = forwardRef<SVGSVGElement, IconCheckProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 29" fill="none">
      <g filter="url(#filter0_d_2298_2424)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 4.18164V14.1815V14.1817V24.1816L21.9996 14.1817H22L21.9998 14.1816L22 14.1815H21.9996L4 4.18164Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2298_2424"
          x="0"
          y="0.181641"
          width="26"
          height="28"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2298_2424" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2298_2424" result="shape" />
        </filter>
      </defs>
    </svg>
  );
});

export default BtnPlay;
