import { AriaButtonOptions } from "react-aria";
import { ReactNode, CSSProperties } from "react";
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
declare const Toggle: (props: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export default Toggle;
