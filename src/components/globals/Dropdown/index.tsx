/* eslint-disable react/jsx-props-no-spreading */
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

type ItemType = {
  // label: string;
  item: { label: string; value: string };
};
interface IProps {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: ItemType;
  dropdownType: string;
  textColor?: string;
}

const Dropdown = (props: IProps) => {
  const { label, data, onSelect, dropdownType, textColor, ...others } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([{ label: '', value: '' }]);

  if (dropdownType === 'sm') {
    return (
      <DropDownPicker
        {...others}
        open={open}
        placeholder={label}
        value={value}
        items={data}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        showTickIcon={false}
        itemSeparator
        itemSeparatorStyle={{
          height: 1,
          width: '100%',
          backgroundColor: '#EFEFEF',
        }}
        arrowIconContainerStyle={{
          right: getRespValue(20),
        }}
        labelStyle={{
          color: '#20201F',
          fontWeight: '400',
          fontSize: getRespValue(28),
          fontFamily: 'aeonik',
        }}
        dropDownContainerStyle={{
          backgroundColor: Colors.light.theme.black,
          width: getRespValue(150),
          paddingLeft: 10,
          paddingRight: 10,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        style={{
          width: getRespValue(150),
          backgroundColor: 'none',
          borderWidth: 0,
        }}
        placeholderStyle={{
          color: Colors.light.theme.black,
          fontWeight: '400',
          fontSize: getRespValue(28),
          fontFamily: 'aeonik',
        }}
        listItemLabelStyle={{
          color: Colors.light.theme.white,
          fontWeight: '400',
          fontSize: 26,
          fontFamily: 'aeonik',
        }}
        listItemContainerStyle={{
          backgroundColor: Colors.light.theme.black,
        }}
      />
    );
  }
  if (dropdownType === 'lg') {
    return (
      <DropDownPicker
        {...others}
        open={open}
        placeholder={label}
        value={value}
        items={data}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        showTickIcon={false}
        dropDownDirection="BOTTOM"
        itemSeparator
        itemSeparatorStyle={{
          height: 1,
          width: '100%',
          backgroundColor: Colors.light.lineYellow,
        }}
        labelStyle={{
          color: '#FFFFFF',
          fontWeight: '400',
          fontSize: getRespValue(21),
          fontFamily: 'aeonik',
        }}
        dropDownContainerStyle={{
          backgroundColor: Colors.light.theme.yellow,
          // zIndex: 999,
          borderColor: Colors.light.lineYellow,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        style={{
          backgroundColor: 'none',
          borderColor: '#626262',
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        placeholderStyle={{
          color: textColor,
          fontWeight: '400',
          fontSize: getRespValue(21),
          fontFamily: 'aeonik',
        }}
        listItemLabelStyle={{
          color: textColor,
          // shadowColor: Colors.light.theme.yellow,
          fontWeight: '400',
          fontSize: getRespValue(21),
          fontFamily: 'aeonik',
        }}
        listItemContainerStyle={{
          backgroundColor: Colors.light.theme.yellow,
          shadowColor: Colors.light.theme.yellow,
        }}
        arrowIconStyle={{}}
        arrowIconContainerStyle={{
          borderColor: 'red',
        }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};
Dropdown.defaultProps = {
  textColor: Colors.light.theme.black,
};

const styles = StyleSheet.create({});

export default Dropdown;
