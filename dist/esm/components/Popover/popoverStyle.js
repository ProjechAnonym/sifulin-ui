import t from"@emotion/styled";import{css as o}from"@emotion/react";const r=t.div`
  position: fixed;
  inset: 0;
`,e=t.div`
  background: ${t=>t.backColor};
  border: 2px solid ${t=>t.borderColor};
  border-radius: 5px;
  width: ${t=>t.width};
  height: ${t=>t.height};
  padding: 5px;
`,i=t.svg`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${t=>t.backColor};
  position: absolute;
  ${t=>{switch(t.position){case"top":return o`
          top: 100%;
          transform: translateX(-50%);
        `;case"bottom":return o`
          bottom: 100%;
          transform: rotate(180deg) translateX(50%);
        `;case"left":return o`
          left: 100%;
          transform: translateY(-50%) rotate(270deg);
        `;case"right":return o`
          right: 100%;
          transform: translateY(-50%) rotate(90deg);
        `;default:return o`
          bottom: 100%;
        `}}}
`,a=t.path`
  stroke: ${t=>t.borderColor};
`,n=t.div`
  width: 100%;
  height: 100%;
  outline: none;
`,l=t.h3`
  height: calc(${t=>t.titleFontSize} + 0.2rem);
  color: ${t=>t.fontColor};
  display: flex;
  justify-content: space-between;
`,s=t.div`
  height: calc(100% - ${t=>t.titleFontSize} - 0.2rem);
  width: 100%;
  overflow: auto;
  overflow-wrap: break-word;
  font-size: ${t=>t.contentFontSize};
  color: ${t=>t.fontColor};
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
`,d=t.div`
  height: 100%;
  width: fit-content;
  transition: all 0.5s;
  border-radius: 3px;
  &:hover {
    background-color: #ffffff33;
    cursor: pointer;
  }
`,c=t.svg`
  height: 100%;
`,h=t.path`
  fill: none;
  stroke-width: 3px;
  stroke: ${t=>t.fontColor};
`;export{a as ArrowPath,i as ArrowSvg,d as ModalCloser,h as ModalCloserPath,c as ModalCloserSvg,n as ModalContainer,s as ModalContent,l as ModalTitle,e as PopoverContainer,r as Underlay};
