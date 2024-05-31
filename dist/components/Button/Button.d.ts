import { AriaButtonOptions } from "react-aria";
import React from "react";
export interface ButtonProps extends AriaButtonOptions<"button"> {
    children: React.ReactNode;
}
declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
