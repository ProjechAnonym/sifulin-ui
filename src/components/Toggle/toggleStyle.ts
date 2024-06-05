import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Color } from "../color";
export const MyToggleSlider = styled.span<{
  selected: boolean;
  upShadowColor: string;
  upBackColor: string;
  upBackSelectColor: string;
  fontSize: string;
  fontColor: string;
  disabled: boolean;
}>`
  position: absolute;
  ${(props) =>
    props.selected && !props.disabled
      ? css`
          left: 110%;
          bottom: 2px;
          transform: translateX(-100%);
        `
      : css`
          left: -1px;
          bottom: 2px;
        `}
  border-radius: 3px;
  background-color: ${(props) =>
    props.disabled
      ? Color.backDisabled
      : props.selected
      ? props.upBackSelectColor
      : props.upBackColor};
  border: 2px solid
    ${(props) => (props.disabled ? Color.borderDisabled : props.upShadowColor)};
  transition: 0.3s;
  box-shadow: 0 3px 0
    ${(props) => (props.disabled ? Color.borderDisabled : props.upShadowColor)};
  height: 100%;
  width: 45%;
  color: ${(props) => (props.disabled ? Color.fontDisabled : props.fontColor)};
  font-size: ${(props) => props.fontSize};
`;
export const MyToggle = styled.button<{
  selected: boolean;
  downShadowColor: string;
  downBackColor: string;
  downBackSelectColor: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 1.2rem;
  border-radius: 5px;
  border: 2px solid ${(props) => props.downShadowColor};
  box-shadow: 4px 4px ${(props) => props.downShadowColor};
  background-color: ${(props) =>
    props.disabled
      ? Color.backDisabled
      : props.selected
      ? `${props.downBackSelectColor}`
      : `${props.downBackColor}`};
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;
