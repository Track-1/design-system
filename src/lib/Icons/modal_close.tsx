import { HTMLAttributes, forwardRef } from "react";

interface ModalCloseProps extends HTMLAttributes<SVGSVGElement> {}

const ModalClose = forwardRef<SVGSVGElement, ModalCloseProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 44295">
        <line
          id="Line 42"
          y1="-0.5"
          x2="16.5052"
          y2="-0.5"
          transform="matrix(0.686655 -0.726983 0.686655 0.726983 1.66797 13)"
          stroke="#62656C"
        />
        <line
          id="Line 43"
          y1="-0.5"
          x2="16.5052"
          y2="-0.5"
          transform="matrix(-0.686655 -0.726983 -0.686655 0.726983 12.332 12.999)"
          stroke="#62656C"
        />
      </g>
    </svg>
  );
});

export default ModalClose;
