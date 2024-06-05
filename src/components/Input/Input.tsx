import { AriaTextFieldProps, useTextField } from "react-aria";
import { useRef, ReactNode, CSSProperties } from "react";
import { Container, MyInput, MyLabel, ErrorMessage } from "./inputStyle";
export interface InputProps extends AriaTextFieldProps {
  label: ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  labelFontSize?: string;
  shadowColor?: string;
  fontColor?: string;
  backColor?: string;
  style?: CSSProperties;
}
const Input = (props: InputProps) => {
  const inputRef = useRef(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const {
    label,
    width = "10rem",
    height = "1.8rem",
    fontSize = "1.2rem",
    labelFontSize = "1rem",
    shadowColor = "#0b2447",
    fontColor = "#000000",
    isDisabled = false,
    backColor = "transparent",
    type = "text",
    style,
  } = props;
  const {
    labelProps,
    inputProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useTextField(props, inputRef);
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
      {isInvalid && (
        <ErrorMessage {...errorMessageProps}>
          {validationErrors.join("")}
        </ErrorMessage>
      )}
    </Container>
  );
};
export default Input;
