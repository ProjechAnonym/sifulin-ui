import { Key } from "react-stately";
import { ReactNode } from "react";
export interface ComboBoxProps {
    label: ReactNode;
    width?: string;
    placeholder: string;
    items: Array<{
        label: string;
        value: string;
        isLink: boolean;
        id: number;
    }>;
    onSelectionChange: (key: Key | null) => void;
    disabledKeys?: Key[];
    menuTrigger?: "focus" | "manual" | "input";
    labelFontSize?: string;
    labelFontColor?: string;
    inputFontSize?: string;
    inputFontColor?: string;
    inputBackColor?: string;
    seperateColor?: string;
    shadowColor?: string;
    listHeight?: string;
    listBackColor?: string;
    listBorderColor?: string;
    listFontSize?: string;
    selectFontColor?: string;
    selectBackColor?: string;
    hoverFontColor?: string;
    hoverBackColor?: string;
    disabledFontColor?: string;
    disabledBackColor?: string;
    defaultFontColor?: string;
    defaultBackColor?: string;
}
declare const ComboBox: (props: ComboBoxProps) => import("react/jsx-runtime").JSX.Element;
export default ComboBox;
