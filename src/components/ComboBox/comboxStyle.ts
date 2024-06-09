import styled from "@emotion/styled";
import { css } from "@emotion/react";
export const ComboBoxContainer = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${(props) => props.width};
  height: fit-content;
`;
export const ComboBoxLabel = styled.label<{
  fontSize: string;
  fontColor: string;
}>`
  max-width: 70%;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  margin: 0 0 3px 8px;
  font-weight: 1000;
  text-align: start;
`;
export const ComboBoxInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;
export const ComboBoxInput = styled.input<{
  fontSize: string;
  backColor: string;
  seperateColor: string;
  shadowColor: string;
  focus: boolean;
}>`
  width: calc(100% - ${(props) => props.fontSize} - 6px);
  border-radius: 3px 0 0 3px;
  padding: 2px 5px;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backColor};
  outline: none;
  transition: all 0.2s ease-in-out;
  border: ${(props) =>
    props.focus
      ? `1.5px solid ${props.shadowColor}`
      : "1.5px solid transparent"};
  ${(props) =>
    props.focus &&
    css`
      box-shadow: -1.5px 0 4px 1.5px ${props.shadowColor};
    `}
  border-right: 1.5px solid ${(props) =>
    props.focus ? props.shadowColor : props.seperateColor};
`;
export const ComboBoxButton = styled.button<{
  fontSize: string;
  backColor: string;
  fontColor: string;
  seperateColor: string;
  focus: boolean;
  shadowColor: string;
}>`
  width: fit-content;
  background-color: ${(props) => props.backColor};
  font-size: ${(props) => props.fontSize};
  padding: 3px 5px;
  border-radius: 0 3px 3px 0;
  transition: all 0.2s ease-in-out;
  border: ${(props) =>
    props.focus
      ? `1.5px solid ${props.shadowColor}`
      : "1.5px solid transparent"};
  ${(props) =>
    props.focus &&
    css`
      box-shadow: 1.5px 0 4px 1.5px ${props.shadowColor};
    `}
  border-left: 1.5px solid ${(props) =>
    props.focus ? props.shadowColor : props.seperateColor};
  color: ${(props) => props.fontColor};
  &:hover {
    cursor: pointer;
  }
`;
export const ComboBoxListContainer = styled.div<{
  width: string;
  backColor: string;
  fontSize: string;
  borderColor: string;
}>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.backColor};
  border-radius: 3px;
  font-size: ${(props) => props.fontSize};
  border: 1.5px solid ${(props) => props.borderColor};
  margin-top: 3px;
`;
export const ComboBoxList = styled.ul<{ height: string }>`
  max-height: ${(props) => props.height};
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #969696;
  }
`;
export const ComboBoxListItem = styled.li<{
  backColor: string;
}>`
  padding: 3px 5px;
  outline: none;
  transition: all 0.35s ease-in-out;
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.color};
  cursor: pointer;
`;
