import styled from "@emotion/styled";
import { Color } from "../color";
export const NumberContainer = styled.div`
  display: flex;
  width: fit-content;
`;
export const NumberLabel = styled.label<{
  fontSize: string;
  fontColor: string;
  disabled: boolean;
}>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.disabled ? Color.fontDisabled : props.fontColor)};
`;
export const NumberInput = styled.input<{
  fontSize: string;
  backColor: string;
  fontColor: string;
}>`
  width: ${(props) => props.width};
  padding: 0.5px 3px;
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.disabled ? Color.backDisabled : props.backColor};
  text-align: center;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.disabled ? Color.fontDisabled : props.fontColor)};
`;
