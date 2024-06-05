import {
  useTooltipTriggerState,
  TooltipTriggerProps,
  TooltipTriggerState,
} from "react-stately";
import {
  mergeProps,
  useTooltip,
  useTooltipTrigger,
  AriaTooltipProps,
} from "react-aria";
import { useRef, ReactNode } from "react";
import {
  TooltipContainer,
  TooltipTrigger,
  TooltipContent,
} from "./tooltipStyle";
interface TooltipProps extends AriaTooltipProps {
  children: ReactNode;
  state: TooltipTriggerState;
  position?: string;
  fontColor?: string;
  fontSize?: string;
  tooltipPadding?: string;
}
const Tooltip = (props: TooltipProps) => {
  const {
    state,
    children,
    position = "bottom",
    fontColor = "#1e1e1e",
    fontSize = "1rem",
    tooltipPadding = "10px",
  } = props;
  const { tooltipProps } = useTooltip(props, state);

  return (
    <TooltipContent
      {...mergeProps(props, tooltipProps)}
      position={position}
      tooltipPadding={tooltipPadding}
      fontColor={fontColor}
      fontSize={fontSize}
    >
      {children}
    </TooltipContent>
  );
};

export interface TooltipButtonProps extends TooltipTriggerProps {
  tooltip: string;
  children: ReactNode;
  zIndex?: number;
  triggerFontSize?: string;
  triggerBackColorGradient?: Array<string>;
  triggerFontColor?: string;
  position?: "top" | "bottom" | "left" | "right";
  tooltipFontColor?: string;
  tooltipFontSize?: string;
  tooltipPadding?: string;
}
const TooltipButton = (props: TooltipButtonProps) => {
  const {
    tooltip,
    children,
    zIndex = 100,
    triggerFontSize = "1.2rem",
    triggerBackColorGradient = ["#321342", "#001569"],
    triggerFontColor = "white",
    position = "bottom",
    tooltipFontColor = "#000",
    tooltipFontSize = "1rem",
    tooltipPadding = "5px",
  } = props;
  const state = useTooltipTriggerState(props);
  const ref = useRef(null);

  // Get props for the trigger and its tooltip
  const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  return (
    <TooltipContainer zIndex={zIndex}>
      <TooltipTrigger
        ref={ref}
        {...triggerProps}
        fontSize={triggerFontSize}
        backColorGradient={triggerBackColorGradient}
        fontColor={triggerFontColor}
      >
        {children}
      </TooltipTrigger>
      {state.isOpen && (
        <Tooltip
          {...tooltipProps}
          state={state}
          position={position}
          fontColor={tooltipFontColor}
          fontSize={tooltipFontSize}
          tooltipPadding={tooltipPadding}
        >
          {tooltip}
        </Tooltip>
      )}
    </TooltipContainer>
  );
};
export default TooltipButton;
