import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { useRef, cloneElement, CSSProperties, ReactNode } from "react";
import Button from "../Button";
import Popover from "./Popover";
export interface PopoverTriggerProps {
  children: ReactNode;
  label: string;
  blankClose?: boolean;
  placement?: "top" | "bottom" | "left" | "right";
  shouldFilp?: boolean;
  style?: CSSProperties;
  isNonModal?: boolean;
  offset?: number;
  crossOffset?: number;
  width?: string;
  height?: string;
  backColor?: string;
  borderColor?: string;
  containerPadding?: number;
  title?: ReactNode;
  titleFontSize?: string;
  contentFontSize?: string;
  fontColor?: string;
  isDisabled?: boolean;
}
const PopoverTrigger = (props: PopoverTriggerProps, { ...stateprops }) => {
  const trigger = useRef(null);
  const state = useOverlayTriggerState(stateprops);
  const {
    children,
    label,
    isNonModal = false,
    placement = "bottom",
    style,
    shouldFilp,
    offset = 3,
    crossOffset = 0,
    width = "8rem",
    height = "6rem",
    backColor = "#2f2f39",
    borderColor = "#4a4a4a",
    containerPadding = 12,
    title,
    titleFontSize,
    contentFontSize,
    fontColor,
    isDisabled = false,
  } = props;
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    trigger
  );

  return (
    <>
      <Button
        {...triggerProps}
        Ref={trigger}
        label={label}
        style={style}
        isDisabled={isDisabled}
      ></Button>
      {state.isOpen && (
        <Popover
          {...props}
          title={title}
          triggerRef={trigger}
          state={state}
          isNonModal={isNonModal}
          placement={placement}
          shouldFlip={shouldFilp}
          offset={offset}
          crossOffset={crossOffset}
          width={width}
          height={height}
          backColor={backColor}
          borderColor={borderColor}
          containerPadding={containerPadding}
          titleFontSize={titleFontSize}
          contentFontSize={contentFontSize}
          fontColor={fontColor}
        >
          {cloneElement(<>{children}</>, overlayProps)}
        </Popover>
      )}
    </>
  );
};
export default PopoverTrigger;
