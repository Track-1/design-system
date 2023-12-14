import { HTMLAttributes, forwardRef } from "react";

interface IconCheckProps extends HTMLAttributes<SVGSVGElement> {}

const IconCheck = forwardRef<SVGSVGElement, IconCheckProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10" fill="none">
      <line x1="0.53033" y1="4.21967" x2="5.03033" y2="8.71967" stroke="white" stroke-width="1.5" />
      <line x1="3.96967" y1="8.71967" x2="11.4697" y2="1.21967" stroke="white" stroke-width="1.5" />
    </svg>
  );
});

export default IconCheck;
