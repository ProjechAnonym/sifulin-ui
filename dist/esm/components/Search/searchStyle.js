import o from"@emotion/styled";import{css as t}from"@emotion/react";import{Color as e}from"../color.js";const n=o.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`,i=o.label`
  position: absolute;
  transform: translateY(-60%);
  top: 0;
  left: 10px;
  transition: all 0.5s;
  max-width: 80%;
  word-wrap: break-word;
  color: ${o=>o.disabled?e.fontDisabled:o.color};
  font-size: ${o=>o.fontSize};
  &::before {
    position: absolute;
    content: "";
    height: 2px;
    background-color: ${o=>o.disabled?e.borderDisabled:o.shadowColor};
    top: 60%;
    width: calc(
      ${o=>o.containerWidth} -
        ${o=>o.elementWidth&&o.elementWidth+5}px + 4px -
        1rem
    );
    left: ${o=>o.elementWidth&&o.elementWidth+5}px;
  }
`,r=o.input`
  width: ${o=>o.width};
  padding: 2px 3px 0 5px;
  height: ${o=>o.height};
  border: 2px solid
    ${o=>o.disabled?e.borderDisabled:o.shadowColor};
  border-radius: 0 0 5px 5px;
  border-top: none;
  font-size: ${o=>o.fontSize};
  background: ${o=>o.backColor};
  outline: none;
  box-shadow: none;
  transition: all 0.5s;
  color: ${o=>o.disabled?e.fontDisabled:o.color};
  &:focus {
    ${o=>o.disabled?t`
            box-shadow: none;
          `:t`
            box-shadow: 7px 7px 0px 0px ${o.shadowColor};
          `};
  }
  appearance: none; /* 移除浏览器默认样式 */
  -webkit-appearance: none;
  &::-webkit-search-cancel-button {
    display: none;
  }
`,a=o.button`
  position: absolute;
  padding: 0;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  height: 100%;
  background-color: transparent;
`;export{a as CancleButton,n as Container,r as MyInput,i as MyLabel};
