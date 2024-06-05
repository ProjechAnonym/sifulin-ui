import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Color } from "../color";
export const NumberButtonStyle = styled.button<{
  fontSize: string;
  fontColor: string;
  backColor: string;
  hoverBackColor: string;
}>`
  padding: 0;
  width: calc(${(props) => props.fontSize} + 0.2rem);
  border-radius: 3px;
  background-color: ${(props) =>
    props.disabled ? Color.backDisabled : props.backColor};
  color: ${(props) => (props.disabled ? Color.fontDisabled : props.fontColor)};
  font-size: ${(props) => props.fontSize};
  font-weight: 1000;
  border: none;
  &:hover {
    ${(props) =>
      !props.disabled &&
      css`
        background-color: ${props.hoverBackColor};
      `};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
  transition: all 0.5s;
`;
