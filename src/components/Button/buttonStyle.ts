import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Color } from "../color";
export const MyButton = styled.button<{
  label: string;
  width: string;
  height: string;
  frontColor: string;
  backColor: string;
  fontSize: string;
  fontColor: string;
  borderColor: string;
}>`
  padding: 10px;
  font-size: 15px;
  outline: none;
  border: 2px solid
    ${(props) => (props.disabled ? Color.borderDisabled : props.borderColor)};
  background-color: ${(props) => (props.disabled ? `#fff` : props.backColor)};
  position: relative;
  letter-spacing: 1px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  &::before {
    ${(props) => `content: "${props.label}";`}
    /*Button's value/text-content */
    border-radius: 3px;
    position: absolute;
    top: -14%;
    left: 7%;
    background-color: ${(props) =>
      props.disabled ? Color.backDisabled : props.frontColor};
    width: 100%;
    height: 100%;
    color: ${(props) =>
      props.disabled ? Color.fontDisabled : props.fontColor};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    font-weight: bold;
    font-size: ${(props) => props.fontSize};
  }
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
  &:hover::before {
    ${(props) =>
      !props.disabled &&
      css`
        top: 0;
        left: 0;
      `}
  }
`;
