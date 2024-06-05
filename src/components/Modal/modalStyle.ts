import styled from "@emotion/styled";
export const Underlay = styled.div<{ zIndex: number }>`
  position: fixed;
  z-index: ${(props) => props.zIndex};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #00000033;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div<{
  width: string;
  height: string;
  backColor: string;
  borderColor: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.backColor};
  border: 2px solid ${(props) => props.borderColor};
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
