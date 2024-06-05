import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TooltipShowUp } from "./tooltipAnimation";
export const TooltipContainer = styled.span<{ zIndex: number }>`
  position: relative;
  z-index: ${(props) => props.zIndex};
  height: fit-content;
  width: fit-content;
`;
export const TooltipTrigger = styled.button<{
  fontSize: string;
  backColorGradient: Array<string>;
  fontColor: string;
}>`
  background: linear-gradient(
    to right,
    ${(props) => props.backColorGradient[0]},
    ${(props) => props.backColorGradient[1]}
  );
  border-radius: 5px;
  border: none;
  font-size: ${(props) => props.fontSize};
  padding: 3px 5px;
  color: ${(props) => props.fontColor};
`;

export const TooltipContent = styled.span<{
  position: string;
  tooltipPadding: string;
  fontColor: string;
  fontSize: string;
}>`
  position: absolute;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  ${(props) => {
    switch (props.position) {
      case "bottom":
        return css`
          top: calc(100% + ${props.tooltipPadding});
          right: 50%;
          transform: translateX(50%);
        `;
      case "top":
        return css`
          bottom: calc(100% + ${props.tooltipPadding});
          right: 50%;
          transform: translateX(50%);
        `;
      case "left":
        return css`
          top: 50%;
          right: calc(100% + ${props.tooltipPadding});
          transform: translateY(-50%);
        `;
      case "right":
        return css`
          top: 50%;
          left: calc(100% + ${props.tooltipPadding});
          transform: translateY(-50%);
        `;
      default:
        break;
    }
  }}
  animation: ${(props) => TooltipShowUp(props.position)} 0.3s;
`;
