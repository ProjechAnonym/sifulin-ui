import { useFocus, useComboBox, useFilter } from "react-aria";
import {
  Item,
  useComboBoxState,
  ComboBoxStateOptions,
  Key,
} from "react-stately";

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import { ReactNode, useRef, useState } from "react";
import Button from "./Button";
import ListBox from "./ListBox";
import Popover from "./Popover";
import {
  ComboBoxLabel,
  ComboBoxContainer,
  ComboBoxInput,
  ComboBoxInputContainer,
} from "./comboxStyle";
interface ComboBoxContaienrProps extends ComboBoxStateOptions<Object> {
  label: ReactNode;
  labelFontSize: string;
  labelFontColor: string;
  width: string;
  inputFontColor: string;
  inputBackColor: string;
  inputFontSize: string;
  seperateColor: string;
  shadowColor: string;
  listHeight: string;
  listBackColor: string;
  listBorderColor: string;
  listFontSize: string;
  selectFontColor: string;
  selectBackColor: string;
  hoverBackColor: string;
  hoverFontColor: string;
  disabledFontColor: string;
  disabledBackColor: string;
  defaultFontColor: string;
  defaultBackColor: string;
}
const ComboBoxContaienr = (props: ComboBoxContaienrProps) => {
  const {
    label,
    labelFontSize,
    labelFontColor,
    width,
    inputFontColor,
    inputBackColor,
    inputFontSize,
    seperateColor,
    shadowColor,
    listHeight,
    listBackColor,
    listBorderColor,
    listFontSize,
    selectFontColor,
    selectBackColor,
    hoverBackColor,
    hoverFontColor,
    disabledFontColor,
    disabledBackColor,
    defaultFontColor,
    defaultBackColor,
  } = props;
  // Setup filter function and state.
  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...props, defaultFilter: contains });
  const [isFocus, setFocus] = useState(false);
  const { focusProps } = useFocus({
    onFocus: (e) => setFocus(true),
    onBlur: (e) => setFocus(false),
  });
  // Setup refs and get props for child elements.
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);

  const { buttonProps, inputProps, listBoxProps, labelProps } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  return (
    <ComboBoxContainer width={width}>
      <ComboBoxLabel
        fontSize={labelFontSize}
        {...labelProps}
        fontColor={labelFontColor}
      >
        {label}
      </ComboBoxLabel>
      <ComboBoxInputContainer>
        <ComboBoxInput
          {...inputProps}
          ref={inputRef}
          {...focusProps}
          color={inputFontColor}
          fontSize={inputFontSize}
          backColor={inputBackColor}
          seperateColor={seperateColor}
          shadowColor={shadowColor}
          focus={isFocus}
        ></ComboBoxInput>
        <Button
          {...buttonProps}
          buttonRef={buttonRef}
          fontSize={inputFontSize}
          backColor={inputBackColor}
          fontColor={inputFontColor}
          seperateColor={seperateColor}
          shadowColor={shadowColor}
          focus={isFocus}
        >
          ↓
        </Button>
        {state.isOpen && (
          <Popover
            state={state}
            triggerRef={inputRef}
            popoverRef={popoverRef}
            isNonModal
            placement="bottom start"
            width={width}
            backColor={listBackColor}
            borderColor={listBorderColor}
            fontSize={listFontSize}
          >
            <ListBox
              {...listBoxProps}
              listBoxRef={listBoxRef}
              state={state}
              height={listHeight}
              selectBackColor={selectBackColor}
              selectFontColor={selectFontColor}
              hoverBackColor={hoverBackColor}
              hoverFontColor={hoverFontColor}
              disabledBackColor={disabledBackColor}
              disabledFontColor={disabledFontColor}
              defaultFontColor={defaultFontColor}
              defaultBackColor={defaultBackColor}
            />
          </Popover>
        )}
      </ComboBoxInputContainer>
    </ComboBoxContainer>
  );
};
export interface ComboBoxProps {
  label: ReactNode;
  width?: string;
  placeholder: string;
  items: Array<{ label: string; value: string; isLink: boolean; id: number }>;
  onSelectionChange: (key: Key | null) => void;
  disabledKeys?: Key[];
  menuTrigger?: "focus" | "manual" | "input";
  labelFontSize?: string;
  labelFontColor?: string;
  inputFontSize?: string;
  inputFontColor?: string;
  inputBackColor?: string;
  seperateColor?: string;
  shadowColor?: string;
  listHeight?: string;
  listBackColor?: string;
  listBorderColor?: string;
  listFontSize?: string;
  selectFontColor?: string;
  selectBackColor?: string;
  hoverFontColor?: string;
  hoverBackColor?: string;
  disabledFontColor?: string;
  disabledBackColor?: string;
  defaultFontColor?: string;
  defaultBackColor?: string;
}

const ComboBox = (props: ComboBoxProps) => {
  const {
    label,
    placeholder,
    items,
    onSelectionChange,
    disabledKeys,
    menuTrigger = "focus",
    labelFontSize = "1.1rem",
    labelFontColor = "#151515",
    width = "10rem",
    inputFontSize = "1rem",
    inputBackColor = "#e4f1f1",
    inputFontColor = "#151515",
    seperateColor = "#0095ff",
    shadowColor = "#00a2ff",
    listHeight = "5rem",
    listBackColor = "#e4f1f1",
    listBorderColor = "#00a2ff",
    listFontSize = "1rem",
    selectFontColor = "#151515",
    selectBackColor = "#ff005d",
    hoverBackColor = "#00a2ff",
    hoverFontColor = "#151515",
    disabledBackColor = "#bcbcbc",
    disabledFontColor = "#555555",
    defaultFontColor = "#151515",
    defaultBackColor = "#e4f1f1",
  } = props;

  return (
    <ComboBoxContaienr
      label={label}
      width={width}
      placeholder={placeholder}
      onSelectionChange={(value) =>
        onSelectionChange && onSelectionChange(value)
      }
      disabledKeys={disabledKeys}
      menuTrigger={menuTrigger}
      labelFontSize={labelFontSize}
      labelFontColor={labelFontColor}
      inputBackColor={inputBackColor}
      inputFontColor={inputFontColor}
      inputFontSize={inputFontSize}
      seperateColor={seperateColor}
      shadowColor={shadowColor}
      listBackColor={listBackColor}
      listBorderColor={listBorderColor}
      listFontSize={listFontSize}
      listHeight={listHeight}
      selectBackColor={selectBackColor}
      selectFontColor={selectFontColor}
      hoverBackColor={hoverBackColor}
      hoverFontColor={hoverFontColor}
      disabledBackColor={disabledBackColor}
      disabledFontColor={disabledFontColor}
      defaultFontColor={defaultFontColor}
      defaultBackColor={defaultBackColor}
    >
      {items.map((item) =>
        item.isLink ? (
          <Item href={item.value} key={item.value}>
            {item.label}
          </Item>
        ) : (
          <Item key={item.value}>{item.label}</Item>
        )
      )}
    </ComboBoxContaienr>
  );
};
export default ComboBox;
