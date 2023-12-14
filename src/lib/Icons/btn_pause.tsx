import { HTMLAttributes, forwardRef } from "react";

interface IconCheckProps extends HTMLAttributes<SVGSVGElement> {}

const BtnPause = forwardRef<SVGSVGElement, IconCheckProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
      <g filter="url(#filter0_d_2093_10152)">
        <rect x="6" y="5" width="6" height="20" fill="white" />
      </g>
      <g filter="url(#filter1_d_2093_10152)">
        <rect x="18" y="5" width="6" height="20" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_2093_10152"
          x="2"
          y="1"
          width="14"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2093_10152" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2093_10152" result="shape" />
        </filter>
        <filter
          id="filter1_d_2093_10152"
          x="14"
          y="1"
          width="14"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2093_10152" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2093_10152" result="shape" />
        </filter>
      </defs>
    </svg>
  );
});

export default BtnPause;
