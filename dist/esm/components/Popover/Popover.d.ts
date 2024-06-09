import { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import { ReactNode } from "react";
interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
    children: ReactNode;
    state: OverlayTriggerState;
    width: string;
    height: string;
    backColor: string;
    borderColor: string;
    title?: ReactNode;
    fontColor?: string;
    contentFontSize?: string;
    titleFontSize?: string;
}
declare const Popover: (props: PopoverProps) => import("react/jsx-runtime").JSX.Element;
export default Popover;
