import { useButton, AriaButtonOptions } from "react-aria";
import { RefObject, ReactNode } from "react";
import { ComboBoxButton } from "./comboxStyle";
interface ButtonProps extends AriaButtonOptions<"button"> {
  children: ReactNode;
  buttonRef: RefObject<HTMLButtonElement>;
  fontSize: string;
  backColor: string;
  fontColor: string;
  seperateColor: string;
  shadowColor: string;
  focus: boolean;
}
const Button = (props: ButtonProps) => {
  const {
    buttonRef,
    children,
    fontSize,
    backColor,
    fontColor,
    seperateColor,
    shadowColor,
    focus,
  } = props;
  const ref = buttonRef;
  const { buttonProps } = useButton(props, ref);
  return (
    <ComboBoxButton
      {...buttonProps}
      ref={ref}
      fontSize={fontSize}
      backColor={backColor}
      fontColor={fontColor}
      seperateColor={seperateColor}
      focus={focus}
      shadowColor={shadowColor}
    >
      {children}
    </ComboBoxButton>
  );
};
export default Button;
