import { CSSProperties, RefObject } from "react";
import { AriaButtonOptions } from "react-aria";
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
declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
