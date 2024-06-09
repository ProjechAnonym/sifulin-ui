import type { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import { ReactNode } from "react";
interface PopoverProps extends AriaPopoverProps {
    children: ReactNode;
    state: OverlayTriggerState;
    width: string;
    fontSize: string;
    backColor: string;
    borderColor: string;
}
declare const Popover: (props: PopoverProps) => import("react/jsx-runtime").JSX.Element;
export default Popover;
