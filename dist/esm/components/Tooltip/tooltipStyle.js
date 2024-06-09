import t from"@emotion/styled";import{css as o}from"@emotion/react";import{TooltipShowUp as n}from"./tooltipAnimation.js";const r=t.span`
  position: relative;
  z-index: ${t=>t.zIndex};
  height: fit-content;
  width: fit-content;
`,i=t.button`
  background: linear-gradient(
    to right,
    ${t=>t.backColorGradient[0]},
    ${t=>t.backColorGradient[1]}
  );
  border-radius: 5px;
  border: none;
  font-size: ${t=>t.fontSize};
  padding: 3px 5px;
  color: ${t=>t.fontColor};
`,a=t.span`
  position: absolute;
  font-size: ${t=>t.fontSize};
  color: ${t=>t.fontColor};
  ${t=>{switch(t.position){case"bottom":return o`
          top: calc(100% + ${t.tooltipPadding});
          right: 50%;
          transform: translateX(50%);
        `;case"top":return o`
          bottom: calc(100% + ${t.tooltipPadding});
          right: 50%;
          transform: translateX(50%);
        `;case"left":return o`
          top: 50%;
          right: calc(100% + ${t.tooltipPadding});
          transform: translateY(-50%);
        `;case"right":return o`
          top: 50%;
          left: calc(100% + ${t.tooltipPadding});
          transform: translateY(-50%);
        `}}}
  animation: ${t=>n(t.position)} 0.3s;
`;export{r as TooltipContainer,a as TooltipContent,i as TooltipTrigger};
