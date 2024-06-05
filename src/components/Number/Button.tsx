import { useButton, AriaButtonOptions } from "react-aria";
import { useRef, ReactNode } from "react";
import { NumberButtonStyle } from "./buttonStyle";
interface NumberButtonProps extends AriaButtonOptions<"button"> {
  children: ReactNode;
  fontSize: string;
  fontColor: string;
  backColor: string;
  hoverBackColor: string;
}
const NumberButton = (props: NumberButtonProps) => {
  const {
    children,
    fontSize,
    isDisabled,
    fontColor,
    backColor,
    hoverBackColor,
  } = props;
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);
  return (
    <NumberButtonStyle
      {...buttonProps}
      ref={ref}
      fontSize={fontSize}
      disabled={isDisabled}
      fontColor={fontColor}
      backColor={backColor}
      hoverBackColor={hoverBackColor}
    >
      {children}
    </NumberButtonStyle>
  );
};
export default NumberButton;
