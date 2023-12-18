import { InputHTMLAttributes, forwardRef } from "react";
import IconCheck from "../Icons/ic_check";
import { checkBoxChecked, checkBoxInput, checkBoxWrapper, checkSize } from "./style.css";

export interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  checked?: boolean;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(({ checked = false, onChange, ...props }, ref) => {
  return (
    <label className={checkBoxWrapper}>
      <input ref={ref} type="checkbox" onChange={onChange} className={checkBoxInput} {...props} />
      <div className={` ${checkBoxChecked[`${checked}`]}`}>{checked && <IconCheck className={checkSize} />}</div>
    </label>
  );
});

export default CheckBox;
