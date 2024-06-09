import o from"@emotion/styled";import{Color as t}from"../color.js";const e=o.div`
  display: flex;
  width: fit-content;
`,i=o.label`
  font-size: ${o=>o.fontSize};
  color: ${o=>o.disabled?t.fontDisabled:o.fontColor};
`,n=o.input`
  width: ${o=>o.width};
  padding: 0.5px 3px;
  border: none;
  outline: none;
  background-color: ${o=>o.disabled?t.backDisabled:o.backColor};
  text-align: center;
  font-size: ${o=>o.fontSize};
  color: ${o=>o.disabled?t.fontDisabled:o.fontColor};
`;export{e as NumberContainer,n as NumberInput,i as NumberLabel};
