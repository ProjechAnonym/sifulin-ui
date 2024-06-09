import o from"@emotion/styled";import{css as r}from"@emotion/react";import{Color as e}from"../color.js";const t=o.button`
  padding: 0;
  width: calc(${o=>o.fontSize} + 0.2rem);
  border-radius: 3px;
  background-color: ${o=>o.disabled?e.backDisabled:o.backColor};
  color: ${o=>o.disabled?e.fontDisabled:o.fontColor};
  font-size: ${o=>o.fontSize};
  font-weight: 1000;
  border: none;
  &:hover {
    ${o=>!o.disabled&&r`
        background-color: ${o.hoverBackColor};
      `};
    cursor: ${o=>o.disabled?"not-allowed":"pointer"};
  }
  transition: all 0.5s;
`;export{t as NumberButtonStyle};
