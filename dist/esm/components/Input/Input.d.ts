import { AriaTextFieldProps } from "react-aria";
import { ReactNode, CSSProperties } from "react";
export interface InputProps extends AriaTextFieldProps {
    label: ReactNode;
    width?: string;
    height?: string;
    fontSize?: string;
    labelFontSize?: string;
    shadowColor?: string;
    fontColor?: string;
    backColor?: string;
    style?: CSSProperties;
}
declare const Input: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
export default Input;
