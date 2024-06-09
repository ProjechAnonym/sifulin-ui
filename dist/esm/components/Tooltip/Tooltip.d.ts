import { TooltipTriggerProps } from "react-stately";
import { ReactNode } from "react";
export interface TooltipButtonProps extends TooltipTriggerProps {
    tooltip: string;
    children: ReactNode;
    zIndex?: number;
    triggerFontSize?: string;
    triggerBackColorGradient?: Array<string>;
    triggerFontColor?: string;
    position?: "top" | "bottom" | "left" | "right";
    tooltipFontColor?: string;
    tooltipFontSize?: string;
    tooltipPadding?: string;
}
declare const TooltipButton: (props: TooltipButtonProps) => import("react/jsx-runtime").JSX.Element;
export default TooltipButton;
