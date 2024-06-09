import { AriaButtonOptions } from "react-aria";
import { RefObject, ReactNode } from "react";
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
declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
