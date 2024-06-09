import { AriaOverlayProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { ReactNode } from "react";
interface ModalProps extends AriaOverlayProps {
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
    zIndex?: number;
}
declare const Modal: (props: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
