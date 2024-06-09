import type { AriaDialogProps } from "react-aria";
import { ReactNode } from "react";
interface DialogProps extends AriaDialogProps {
    title?: ReactNode;
    children: ReactNode;
    width?: string;
    height?: string;
    titleFontSize?: string;
    contentFontSize?: string;
    fontColor?: string;
    isNonModal?: boolean;
    onClose?: () => void;
}
declare const Dialog: (props: DialogProps) => import("react/jsx-runtime").JSX.Element;
export default Dialog;
