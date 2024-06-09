import { CSSProperties, ReactNode } from "react";
export interface PopoverTriggerProps {
    children: ReactNode;
    label: string;
    blankClose?: boolean;
    placement?: "top" | "bottom" | "left" | "right";
    shouldFilp?: boolean;
    style?: CSSProperties;
    isNonModal?: boolean;
    offset?: number;
    crossOffset?: number;
    width?: string;
    height?: string;
    backColor?: string;
    borderColor?: string;
    containerPadding?: number;
    title?: ReactNode;
    titleFontSize?: string;
    contentFontSize?: string;
    fontColor?: string;
    isDisabled?: boolean;
}
declare const PopoverTrigger: (props: PopoverTriggerProps, { ...stateprops }: {
    [x: string]: any;
}) => import("react/jsx-runtime").JSX.Element;
export default PopoverTrigger;
