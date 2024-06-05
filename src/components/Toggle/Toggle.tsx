import { useToggleButton } from "react-aria";
import { AriaButtonOptions } from "react-aria";
import { useToggleState } from "react-stately";
import { useRef, ReactNode, CSSProperties } from "react";
import { MyToggle, MyToggleSlider } from "./toggleStyle";
export interface ToggleProps extends AriaButtonOptions<"button"> {
  downShadowColor?: string;
  downBackColor?: string;
  downBackSelectColor?: string;
  upShadowColor?: string;
  upBackColor?: string;
  upBackSelectColor?: string;
  fontSize?: string;
  fontColor?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
const Toggle = (props: ToggleProps) => {
  const toggleRef = useRef(null);
  const {
    downShadowColor = "#000",
    upShadowColor = "#414141",
    downBackColor = "#ebf3f5",
    downBackSelectColor = "#00b3ff",
    upBackColor = "#f8f8f8",
    upBackSelectColor = "#f8f8f8",
    fontSize = "1rem",
    fontColor = "#000",
    isDisabled = false,
    children,
    style,
  } = props;
  const state = useToggleState(props);
  const { buttonProps } = useToggleButton(props, state, toggleRef);
  return (
    <MyToggle
      {...buttonProps}
      ref={toggleRef}
      selected={state.isSelected}
      downShadowColor={downShadowColor}
      downBackColor={downBackColor}
      downBackSelectColor={downBackSelectColor}
      disabled={isDisabled}
      style={style}
    >
      <MyToggleSlider
        selected={state.isSelected}
        upShadowColor={upShadowColor}
        upBackColor={upBackColor}
        upBackSelectColor={upBackSelectColor}
        fontSize={fontSize}
        fontColor={fontColor}
        disabled={isDisabled}
      >
        {children}
      </MyToggleSlider>
    </MyToggle>
  );
};
export default Toggle;
