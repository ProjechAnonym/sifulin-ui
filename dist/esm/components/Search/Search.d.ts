import { AriaSearchFieldProps } from "react-aria";
import { ReactNode, CSSProperties } from "react";
export interface SearchProps extends AriaSearchFieldProps {
    label?: ReactNode;
    width?: string;
    height?: string;
    fontSize?: string;
    labelFontSize?: string;
    shadowColor?: string;
    fontColor?: string;
    backColor?: string;
    style?: CSSProperties;
}
declare const Search: (props: SearchProps) => import("react/jsx-runtime").JSX.Element;
export default Search;
