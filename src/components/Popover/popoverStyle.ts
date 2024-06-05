import styled from "@emotion/styled";
import { css } from "@emotion/react";
export const Underlay = styled.div`
  position: fixed;
  inset: 0;
`;
export const PopoverContainer = styled.div<{
  width: string;
  height: string;
  backColor: string;
  borderColor: string;
}>`
  background: ${(props) => props.backColor};
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 5px;
`;
export const ArrowSvg = styled.svg<{ position: string; backColor: string }>`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${(props) => props.backColor};
  position: absolute;
  ${(props) => {
    switch (props.position) {
      case "top":
        return css`
          top: 100%;
          transform: translateX(-50%);
        `;
      case "bottom":
        return css`
          bottom: 100%;
          transform: rotate(180deg) translateX(50%);
        `;
      case "left":
        return css`
          left: 100%;
          transform: translateY(-50%) rotate(270deg);
        `;
      case "right":
        return css`
          right: 100%;
          transform: translateY(-50%) rotate(90deg);
        `;
      default:
        return css`
          bottom: 100%;
        `;
    }
  }}
`;
export const ArrowPath = styled.path<{ borderColor: string }>`
  stroke: ${(props) => props.borderColor};
`;
export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  outline: none;
`;
export const ModalTitle = styled.h3<{
  titleFontSize: string;
  fontColor: string;
}>`
  height: calc(${(props) => props.titleFontSize} + 0.2rem);
  color: ${(props) => props.fontColor};
  display: flex;
  justify-content: space-between;
`;
export const ModalContent = styled.div<{
  titleFontSize: string;
  contentFontSize: string;
  fontColor: string;
}>`
  height: calc(100% - ${(props) => props.titleFontSize} - 0.2rem);
  width: 100%;
  overflow: auto;
  overflow-wrap: break-word;
  font-size: ${(props) => props.contentFontSize};
  color: ${(props) => props.fontColor};
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #969696;
  }
`;
export const ModalCloser = styled.div<{ contentFontSize: string }>`
  height: 100%;
  width: fit-content;
  transition: all 0.5s;
  border-radius: 3px;
  &:hover {
    background-color: #ffffff33;
    cursor: pointer;
  }
`;
export const ModalCloserSvg = styled.svg`
  height: 100%;
`;
export const ModalCloserPath = styled.path<{ fontColor: string }>`
  fill: none;
  stroke-width: 3px;
  stroke: ${(props) => props.fontColor};
`;
