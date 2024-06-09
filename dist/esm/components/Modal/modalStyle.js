import o from"@emotion/styled";const t=o.div`
  position: fixed;
  z-index: ${o=>o.zIndex};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #00000033;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
`,r=o.div`
  width: ${o=>o.width};
  height: ${o=>o.height};
  padding: 10px;
  border-radius: 10px;
  background-color: ${o=>o.backColor};
  border: 2px solid ${o=>o.borderColor};
`,e=o.div`
  width: 100%;
  height: 100%;
  outline: none;
`,i=o.h3`
  height: calc(${o=>o.titleFontSize} + 0.2rem);
  color: ${o=>o.fontColor};
  display: flex;
  justify-content: space-between;
`,l=o.div`
  height: calc(100% - ${o=>o.titleFontSize} - 0.2rem);
  width: 100%;
  overflow: auto;
  overflow-wrap: break-word;
  font-size: ${o=>o.contentFontSize};
  color: ${o=>o.fontColor};
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
`,n=o.div`
  height: 100%;
  width: fit-content;
  transition: all 0.5s;
  border-radius: 3px;
  &:hover {
    background-color: #ffffff33;
    cursor: pointer;
  }
`,d=o.svg`
  height: 100%;
`,c=o.path`
  fill: none;
  stroke-width: 3px;
  stroke: ${o=>o.fontColor};
`;export{r as Container,n as ModalCloser,c as ModalCloserPath,d as ModalCloserSvg,e as ModalContainer,l as ModalContent,i as ModalTitle,t as Underlay};
