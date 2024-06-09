import o from"@emotion/styled";import{css as e}from"@emotion/react";import{Color as t}from"../color.js";const r=o.div`
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
  color: ${o=>o.disabled?t.fontDisabled:o.color};
  font-size: ${o=>o.fontSize};
  &::before {
    position: absolute;
    content: "";
    height: 2px;
    background-color: ${o=>o.disabled?t.borderDisabled:o.shadowColor};
    top: 60%;
    width: calc(
      ${o=>o.containerWidth} -
        ${o=>o.elementWidth&&o.elementWidth+5}px +
        ${o=>"search"===o.inputMode?4:2}px -${o=>"search"===o.inputType?" 1rem":" 0px"}
    );
    left: ${o=>o.elementWidth&&o.elementWidth+5}px;
  }
`,n=o.input`
  width: ${o=>o.width};
  padding: 2px 3px 0 5px;
  height: ${o=>o.height};
  border: 2px solid
    ${o=>o.disabled?t.borderDisabled:o.shadowColor};
  border-radius: 0 0 5px 5px;
  border-top: none;
  font-size: ${o=>o.fontSize};
  background: ${o=>o.backColor};
  outline: none;
  box-shadow: none;
  transition: all 0.5s;
  color: ${o=>o.disabled?t.fontDisabled:o.color};
  &:focus {
    ${o=>o.disabled?e`
            box-shadow: none;
          `:e`
            box-shadow: 7px 7px 0px 0px ${o.shadowColor};
          `};
  }
  appearance: none; /* 移除浏览器默认样式 */
  -webkit-appearance: none;
`,a=o.div`
  padding: 3px 5px;
  position: absolute;
  font-size: 0.8rem;
  color: ${t.errorFont};
  background-color: ${t.errorBack};
  transform: translate(-50%, 80%);
  left: 50%;
  bottom: 0;
  width: 100%;
  border-radius: 5px;
  font-weight: 1000;
`;export{r as Container,a as ErrorMessage,n as MyInput,i as MyLabel};
