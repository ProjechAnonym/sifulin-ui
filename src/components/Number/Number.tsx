import { useNumberFieldState } from "react-stately";
import { useLocale, useNumberField, AriaNumberFieldProps } from "react-aria";
import { useRef, CSSProperties } from "react";
import NumberButton from "./Button";
import { NumberInput, NumberLabel, NumberContainer } from "./inputStyle";
export interface NumberProps extends AriaNumberFieldProps {
  fontSize?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonFontColor?: string;
  inputBacKColor?: string;
  inputFontColor?: string;
  width?: string;
  labelFontSize?: string;
  labelFontColor?: string;
  style?: CSSProperties;
}
const Number = (props: NumberProps) => {
  const {
    label,
    fontSize = "1rem",
    isDisabled = false,
    inputBacKColor = "#d8d8d8",
    inputFontColor = "#000",
    buttonColor = "transparent",
    buttonHoverColor = "#ffffff65",
    buttonFontColor = "#fff",
    width = "2rem",
    labelFontSize = "0.8rem",
    labelFontColor = "#e4f6ff",
    style,
  } = props;
  const { locale } = useLocale();
  const state = useNumberFieldState({ ...props, locale });
  const inputRef = useRef(null);
  const {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
  } = useNumberField(props, state, inputRef);

  return (
    <div style={style}>
      {label && (
        <NumberLabel
          {...labelProps}
          disabled={isDisabled}
          fontColor={labelFontColor}
          fontSize={labelFontSize}
        >
          {label}
        </NumberLabel>
      )}
      <NumberContainer {...groupProps}>
        <NumberButton
          {...decrementButtonProps}
          fontSize={fontSize}
          isDisabled={isDisabled}
          hoverBackColor={buttonHoverColor}
          backColor={buttonColor}
          fontColor={buttonFontColor}
        >
          -
        </NumberButton>
        <NumberInput
          width={width}
          fontColor={inputFontColor}
          fontSize={fontSize}
          backColor={inputBacKColor}
          {...inputProps}
          ref={inputRef}
        />
        <NumberButton
          {...incrementButtonProps}
          fontSize={fontSize}
          isDisabled={isDisabled}
          hoverBackColor={buttonHoverColor}
          backColor={buttonColor}
          fontColor={buttonFontColor}
        >
          +
        </NumberButton>
      </NumberContainer>
    </div>
  );
};
export default Number;
