import {
  DismissButton,
  Overlay,
  usePopover,
  AriaPopoverProps,
} from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import { ReactNode, useRef } from "react";
import {
  PopoverContainer,
  Underlay,
  ArrowSvg,
  ArrowPath,
} from "./popoverStyle";
import Dialog from "./Dialog";
interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: ReactNode;
  state: OverlayTriggerState;
  width: string;
  height: string;
  backColor: string;
  borderColor: string;
  title?: ReactNode;
  fontColor?: string;
  contentFontSize?: string;
  titleFontSize?: string;
}
const Popover = (props: PopoverProps) => {
  const popoverRef = useRef(null);
  const {
    children,
    state,
    offset = 8,
    isNonModal = false,
    placement,
    width,
    height,
    backColor,
    borderColor,
    title,
    fontColor,
    contentFontSize,
    titleFontSize,
  } = props;
  const { popoverProps, underlayProps, arrowProps } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      {!isNonModal && <Underlay {...underlayProps} />}
      <PopoverContainer
        {...popoverProps}
        ref={popoverRef}
        width={width}
        height={height}
        backColor={backColor}
        borderColor={borderColor}
      >
        <ArrowSvg
          {...arrowProps}
          position={placement!}
          viewBox="0 0 12 12"
          backColor={backColor}
        >
          <ArrowPath d="M0 0 L6 6 L12 0" borderColor={borderColor} />
        </ArrowSvg>
        <DismissButton onDismiss={state.close} />
        <Dialog
          width={width}
          height={height}
          title={title}
          fontColor={fontColor}
          titleFontSize={titleFontSize}
          contentFontSize={contentFontSize}
          onClose={() => state.close()}
          isNonModal={isNonModal}
        >
          {children}
        </Dialog>
        <DismissButton onDismiss={state.close} />
      </PopoverContainer>
    </Overlay>
  );
};
export default Popover;
