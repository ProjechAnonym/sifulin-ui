import { Overlay, useModalOverlay, AriaOverlayProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { useRef, ReactNode } from "react";
import { Underlay, Container } from "./modalStyle";
import Dialog from "./Dialog";
interface ModalProps extends AriaOverlayProps {
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
  zIndex?: number;
}
const Modal = (props: ModalProps) => {
  const {
    state,
    children,
    zIndex,
    isDismissable,
    width,
    height,
    fontColor,
    contentFontSize,
    titleFontSize,
    backColor,
    borderColor,
  } = props;
  const ref = useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  return (
    <Overlay>
      <Underlay zIndex={zIndex!} {...underlayProps}>
        <Container
          {...modalProps}
          ref={ref}
          width={width}
          height={height}
          backColor={backColor}
          borderColor={borderColor}
        >
          <Dialog
            onClose={state.close}
            isDismissable={isDismissable}
            fontColor={fontColor}
            contentFontSize={contentFontSize}
            titleFontSize={titleFontSize}
          >
            {children}
          </Dialog>
        </Container>
      </Underlay>
    </Overlay>
  );
};
export default Modal;
