import { useRef, CSSProperties, RefObject } from "react";
import { useButton } from "react-aria";
import { AriaButtonOptions } from "react-aria";
import { MyButton } from "./buttonStyle";
export interface ButtonProps extends AriaButtonOptions<"button"> {
  label?: string;
  width?: string;
  height?: string;
  fontColor?: string;
  frontColor?: string;
  backColor?: string;
  fontSize?: string;
  borderColor?: string;
  style?: CSSProperties;
  Ref?: RefObject<HTMLButtonElement>;
}
const Button = (props: ButtonProps) => {
  const {
    style,
    label = "",
    width = "4rem",
    height = "1.8rem",
    fontColor = "#fff",
    frontColor = "#000",
    backColor = "#fff",
    borderColor = "#000",
    fontSize = "1rem",
    isDisabled = false,
    Ref,
  } = props;
  const buttonRef = useRef(null);
  const { buttonProps } = useButton(props, Ref !== undefined ? Ref : buttonRef);

  return (
    <MyButton
      style={style}
      {...buttonProps}
      label={label}
      width={width}
      height={height}
      fontColor={fontColor}
      frontColor={frontColor}
      backColor={backColor}
      fontSize={fontSize}
      borderColor={borderColor}
      disabled={isDisabled}
      ref={Ref !== undefined ? Ref : buttonRef}
    ></MyButton>
  );
};
export default Button;
