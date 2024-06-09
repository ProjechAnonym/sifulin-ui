import o from"@emotion/styled";import{css as e}from"@emotion/react";import{Color as t}from"../color.js";const i=o.button`
  padding: 10px;
  font-size: 15px;
  outline: none;
  border: 2px solid
    ${o=>o.disabled?t.borderDisabled:o.borderColor};
  background-color: ${o=>o.disabled?"#fff":o.backColor};
  position: relative;
  letter-spacing: 1px;
  width: ${o=>o.width};
  height: ${o=>o.height};
  border-radius: 5px;
  &::before {
    ${o=>`content: "${o.label}";`}
    /*Button's value/text-content */
    border-radius: 3px;
    position: absolute;
    top: -14%;
    left: 7%;
    background-color: ${o=>o.disabled?t.backDisabled:o.frontColor};
    width: 100%;
    height: 100%;
    color: ${o=>o.disabled?t.fontDisabled:o.fontColor};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    font-weight: bold;
    font-size: ${o=>o.fontSize};
  }
  &:hover {
    cursor: ${o=>o.disabled?"not-allowed":"pointer"};
  }
  &:hover::before {
    ${o=>!o.disabled&&e`
        top: 0;
        left: 0;
      `}
  }
`;export{i as MyButton};
