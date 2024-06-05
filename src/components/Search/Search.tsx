import { useSearchFieldState } from "react-stately";
import { useSearchField, AriaSearchFieldProps } from "react-aria";
import { useRef, ReactNode, CSSProperties } from "react";
import { Container, MyInput, MyLabel, CancleButton } from "./searchStyle";
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
const Search = (props: SearchProps) => {
  const inputRef = useRef(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const state = useSearchFieldState(props);
  const {
    label = "search",
    width = "10rem",
    height = "1.8rem",
    fontSize = "1.2rem",
    labelFontSize = "1rem",
    shadowColor = "#0b2447",
    fontColor = "#000000",
    isDisabled = false,
    backColor = "transparent",
    type = "search",
    style,
  } = props;
  const { labelProps, inputProps, clearButtonProps } = useSearchField(
    props,
    state,
    inputRef
  );
  return (
    <Container style={style}>
      <MyLabel
        {...labelProps}
        ref={labelRef}
        disabled={isDisabled}
        elementWidth={labelRef.current && labelRef.current.offsetWidth}
        containerWidth={width}
        fontSize={labelFontSize}
        shadowColor={shadowColor}
        color={fontColor}
        inputType={type}
      >
        {label}
      </MyLabel>
      <MyInput
        {...inputProps}
        disabled={isDisabled}
        ref={inputRef}
        width={width}
        height={height}
        fontSize={fontSize}
        shadowColor={shadowColor}
        color={fontColor}
        backColor={backColor}
      ></MyInput>
      {state.value !== "" && (
        <CancleButton {...clearButtonProps}>❎</CancleButton>
      )}
    </Container>
  );
};
export default Search;
