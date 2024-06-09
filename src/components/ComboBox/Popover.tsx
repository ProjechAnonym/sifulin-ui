import { DismissButton, Overlay, usePopover } from "react-aria";
import type { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import { ReactNode, RefObject } from "react";
import { ComboBoxListContainer } from "./comboxStyle";
interface PopoverProps extends AriaPopoverProps {
  children: ReactNode;
  state: OverlayTriggerState;
  width: string;

  fontSize: string;
  backColor: string;
  borderColor: string;
}

const Popover = (props: PopoverProps) => {
  const { children, state, width, fontSize, borderColor, backColor } = props;
  const { popoverProps } = usePopover(props, state);

  return (
    <Overlay>
      <ComboBoxListContainer
        {...popoverProps}
        ref={props.popoverRef as RefObject<HTMLDivElement>}
        width={width}
        fontSize={fontSize}
        borderColor={borderColor}
        backColor={backColor}
      >
        {children}
        <DismissButton onDismiss={state.close} />
      </ComboBoxListContainer>
    </Overlay>
  );
};
export default Popover;
