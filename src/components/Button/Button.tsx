import { useButton } from "react-aria";
import { AriaButtonOptions } from "react-aria";
import React from "react";
import styled from "@emotion/styled";
const MyButton = styled.button<{ isPressed: boolean }>`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
  color: ${(props) => (props.isPressed ? "#e82424" : "blue")};
`;
export interface ButtonProps extends AriaButtonOptions<"button"> {
  children: React.ReactNode;
}
const Button = (props: ButtonProps) => {
  const buttonRef = React.useRef(null);
  const { children } = props;
  const { buttonProps, isPressed } = useButton(props, buttonRef);
  return (
    <MyButton {...buttonProps} ref={buttonRef} isPressed={isPressed}>
      {children}
    </MyButton>
  );
};
export default Button;
