import type { AriaDialogProps } from "react-aria";
import { useDialog } from "react-aria";
import { ReactNode, useRef } from "react";
import {
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalCloser,
  ModalCloserSvg,
  ModalCloserPath,
} from "./popoverStyle";
interface DialogProps extends AriaDialogProps {
  title?: ReactNode;
  children: ReactNode;
  width?: string;
  height?: string;
  titleFontSize?: string;
  contentFontSize?: string;
  fontColor?: string;
  isNonModal?: boolean;
  onClose?: () => void;
}

const Dialog = (props: DialogProps) => {
  const dialogRef = useRef(null);
  const {
    title = "title",
    children,
    titleFontSize = "1.2rem",
    contentFontSize = "1rem",
    fontColor = "#ffffff",
    onClose,
    isNonModal = false,
  } = props;
  const { dialogProps, titleProps } = useDialog(props, dialogRef);

  return (
    <ModalContainer {...dialogProps} ref={dialogRef}>
      {title && (
        <ModalTitle
          {...titleProps}
          titleFontSize={titleFontSize}
          fontColor={fontColor}
        >
          {title}
          {isNonModal && (
            <ModalCloser contentFontSize={contentFontSize}>
              <ModalCloserSvg
                viewBox="0 0 50 50"
                onClick={() => onClose && onClose()}
              >
                <ModalCloserPath
                  d="M10,10 L40,40 M40,10 L10,40"
                  fontColor={fontColor}
                />
              </ModalCloserSvg>
            </ModalCloser>
          )}
        </ModalTitle>
      )}
      <ModalContent
        titleFontSize={titleFontSize}
        contentFontSize={contentFontSize}
        fontColor={fontColor}
      >
        {children}
      </ModalContent>
    </ModalContainer>
  );
};
export default Dialog;
