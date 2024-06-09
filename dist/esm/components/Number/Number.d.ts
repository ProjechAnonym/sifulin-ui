import { AriaNumberFieldProps } from "react-aria";
import { CSSProperties } from "react";
export interface NumberProps extends AriaNumberFieldProps {
    fontSize?: string;
    buttonColor?: string;
    buttonHoverColor?: string;
    buttonFontColor?: string;
    inputBacKColor?: string;
    inputFontColor?: string;
    width?: string;
    labelFontSize?: string;
    labelFontColor?: string;
    style?: CSSProperties;
}
declare const Number: (props: NumberProps) => import("react/jsx-runtime").JSX.Element;
export default Number;
