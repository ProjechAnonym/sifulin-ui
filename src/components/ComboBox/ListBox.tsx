import { useListBox, useOption, AriaListBoxOptions } from "react-aria";
import { ListState } from "react-stately";
import { RefObject, useRef } from "react";
import { ComboBoxList, ComboBoxListItem } from "./comboxStyle";
interface ListProps extends AriaListBoxOptions<unknown> {
  state: ListState<unknown>;
  listBoxRef?: RefObject<HTMLUListElement>;
  height: string;
  selectBackColor: string;
  hoverBackColor: string;
  disabledBackColor: string;
  selectFontColor: string;
  hoverFontColor: string;
  disabledFontColor: string;
  defaultFontColor: string;
  defaultBackColor: string;
}
const ListBox = (props: ListProps) => {
  const ref = useRef(null);
  const {
    listBoxRef = ref,
    state,
    height,
    selectBackColor,
    selectFontColor,
    hoverBackColor,
    hoverFontColor,
    disabledBackColor,
    disabledFontColor,
    defaultFontColor,
    defaultBackColor,
  } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ComboBoxList {...listBoxProps} ref={listBoxRef} height={height}>
      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          selectBackColor={selectBackColor}
          selectFontColor={selectFontColor}
          hoverBackColor={hoverBackColor}
          hoverFontColor={hoverFontColor}
          disabledBackColor={disabledBackColor}
          disabledFontColor={disabledFontColor}
          defaultFontColor={defaultFontColor}
          defaultBackColor={defaultBackColor}
        />
      ))}
    </ComboBoxList>
  );
};
interface OptionProps {
  item: any;
  state: ListState<unknown>;
  selectBackColor: string;
  hoverBackColor: string;
  disabledBackColor: string;
  selectFontColor: string;
  hoverFontColor: string;
  disabledFontColor: string;
  defaultFontColor: string;
  defaultBackColor: string;
}
function Option(props: OptionProps) {
  const ref = useRef(null);
  const {
    item,
    state,
    selectBackColor,
    selectFontColor,
    hoverBackColor,
    hoverFontColor,
    disabledBackColor,
    disabledFontColor,
    defaultFontColor,
    defaultBackColor,
  } = props;
  const { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  let backgroundColor = defaultBackColor;
  let color = defaultFontColor;

  if (isSelected) {
    backgroundColor = selectBackColor;
    color = selectFontColor;
  } else if (isFocused) {
    backgroundColor = hoverBackColor;
    color = hoverFontColor;
  } else if (isDisabled) {
    backgroundColor = disabledBackColor;
    color = disabledFontColor;
  }

  return (
    <ComboBoxListItem
      {...optionProps}
      ref={ref}
      backColor={backgroundColor}
      color={color}
    >
      {item.rendered}
    </ComboBoxListItem>
  );
}
export default ListBox;
