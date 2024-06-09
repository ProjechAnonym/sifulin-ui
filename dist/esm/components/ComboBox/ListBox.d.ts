import { AriaListBoxOptions } from "react-aria";
import { ListState } from "react-stately";
import { RefObject } from "react";
interface ListProps extends AriaListBoxOptions<unknown> {
    state: ListState<unknown>;
    listBoxRef?: RefObject<HTMLUListElement>;
    height: string;
    selectBackColor: string;
    hoverBackColor: string;
    disabledBackColor: string;
    selectFontColor: string;
    hoverFontColor: string;
    disabledFontColor: string;
    defaultFontColor: string;
    defaultBackColor: string;
}
declare const ListBox: (props: ListProps) => import("react/jsx-runtime").JSX.Element;
export default ListBox;
