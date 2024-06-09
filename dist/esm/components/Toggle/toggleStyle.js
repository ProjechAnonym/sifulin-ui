import o from"@emotion/styled";import{css as e}from"@emotion/react";import{Color as r}from"../color.js";const d=o.span`
  position: absolute;
  ${o=>o.selected&&!o.disabled?e`
          left: 110%;
          bottom: 2px;
          transform: translateX(-100%);
        `:e`
          left: -1px;
          bottom: 2px;
        `}
  border-radius: 3px;
  background-color: ${o=>o.disabled?r.backDisabled:o.selected?o.upBackSelectColor:o.upBackColor};
  border: 2px solid
    ${o=>o.disabled?r.borderDisabled:o.upShadowColor};
  transition: 0.3s;
  box-shadow: 0 3px 0
    ${o=>o.disabled?r.borderDisabled:o.upShadowColor};
  height: 100%;
  width: 45%;
  color: ${o=>o.disabled?r.fontDisabled:o.fontColor};
  font-size: ${o=>o.fontSize};
`,t=o.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 1.2rem;
  border-radius: 5px;
  border: 2px solid ${o=>o.downShadowColor};
  box-shadow: 4px 4px ${o=>o.downShadowColor};
  background-color: ${o=>o.disabled?r.backDisabled:o.selected?`${o.downBackSelectColor}`:`${o.downBackColor}`};
  &:hover {
    cursor: ${o=>o.disabled?"not-allowed":"pointer"};
  }
`;export{t as MyToggle,d as MyToggleSlider};
