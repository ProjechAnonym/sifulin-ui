import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Color } from "../color";
export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;
export const MyLabel = styled.label<{
  elementWidth: number | null;
  containerWidth: string;
  fontSize: string;
  shadowColor: string;
  disabled: boolean;
  inputType: string;
}>`
  position: absolute;
  transform: translateY(-60%);
  top: 0;
  left: 10px;
  transition: all 0.5s;
  max-width: 80%;
  word-wrap: break-word;
  color: ${(props) => (props.disabled ? Color.fontDisabled : props.color)};
  font-size: ${(props) => props.fontSize};
  &::before {
    position: absolute;
    content: "";
    height: 2px;
    background-color: ${(props) =>
      props.disabled ? Color.borderDisabled : props.shadowColor};
    top: 60%;
    width: calc(
      ${(props) => props.containerWidth} -
        ${(props) => props.elementWidth && props.elementWidth + 5}px +
        ${(props) => (props.inputMode === "search" ? 4 : 2)}px -${(props) => (props.inputType === "search" ? " 1rem" : " 0px")}
    );
    left: ${(props) => props.elementWidth && props.elementWidth + 5}px;
  }
`;
export const MyInput = styled.input<{
  fontSize: string;
  shadowColor: string;
  backColor: string;
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  padding: 2px 3px 0 5px;
  height: ${(props) => props.height};
  border: 2px solid
    ${(props) => (props.disabled ? Color.borderDisabled : props.shadowColor)};
  border-radius: 0 0 5px 5px;
  border-top: none;
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.backColor};
  outline: none;
  box-shadow: none;
  transition: all 0.5s;
  color: ${(props) => (props.disabled ? Color.fontDisabled : props.color)};
  &:focus {
    ${(props) =>
      props.disabled
        ? css`
            box-shadow: none;
          `
        : css`
            box-shadow: 7px 7px 0px 0px ${props.shadowColor};
          `};
  }
  appearance: none; /* 移除浏览器默认样式 */
  -webkit-appearance: none;
`;
export const ErrorMessage = styled.div`
  padding: 3px 5px;
  position: absolute;
  font-size: 0.8rem;
  color: ${Color.errorFont};
  background-color: ${Color.errorBack};
  transform: translate(-50%, 80%);
  left: 50%;
  bottom: 0;
  width: 100%;
  border-radius: 5px;
  font-weight: 1000;
`;
