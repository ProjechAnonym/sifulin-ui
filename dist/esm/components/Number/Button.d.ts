import { AriaButtonOptions } from "react-aria";
import { ReactNode } from "react";
interface NumberButtonProps extends AriaButtonOptions<"button"> {
    children: ReactNode;
    fontSize: string;
    fontColor: string;
    backColor: string;
    hoverBackColor: string;
}
declare const NumberButton: (props: NumberButtonProps) => import("react/jsx-runtime").JSX.Element;
export default NumberButton;
