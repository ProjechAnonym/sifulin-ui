import { ReactNode } from "react";
export interface ModalTriggerProps {
    label: string;
    children: (close: () => void) => ReactNode;
    width?: string;
    height?: string;
    backColor?: string;
    borderColor?: string;
    zIndex?: number;
    isDismissable?: boolean;
}
declare const ModalTrigger: (props: ModalTriggerProps, { ...stateProps }: {
    [x: string]: any;
}) => import("react/jsx-runtime").JSX.Element;
export default ModalTrigger;
