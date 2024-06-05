import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { cloneElement, ReactNode } from "react";
// Reuse the Button from your component library. See below for details.
import Button from "../Button";
import Modal from "./Popover";
export interface ModalTriggerProps {
  label: string;
  children: (close: () => void) => ReactNode;
  width?: string;
  height?: string;
  backColor?: string;
  borderColor?: string;
  zIndex?: number;
  isDismissable?: boolean;
}
const ModalTrigger = (props: ModalTriggerProps, { ...stateProps }) => {
  const {
    label,
    children,
    width = "18rem",
    height = "15rem",
    backColor = "#000",
    borderColor = "#353535",
    zIndex = 100,
    isDismissable,
  } = props;
  const state = useOverlayTriggerState(stateProps);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state
  );

  return (
    <>
      <Button {...triggerProps} label={label}></Button>
      {state.isOpen && (
        <Modal
          {...props}
          state={state}
          width={width}
          height={height}
          backColor={backColor}
          borderColor={borderColor}
          zIndex={zIndex}
          isDismissable={isDismissable}
        >
          {cloneElement(<>{children(state.close)}</>, overlayProps)}
        </Modal>
      )}
    </>
  );
};
export default ModalTrigger;
