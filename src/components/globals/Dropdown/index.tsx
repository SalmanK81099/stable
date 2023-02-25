/* eslint-disable react/jsx-props-no-spreading */
import ArrowDownSVG from '@assets/icons/kyc/arrow-down-yellow.svg';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

type ItemType = {
  // label: string;
  label: string;
  value: string;
};

interface IProps {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: React.Dispatch<React.SetStateAction<any[]>>;
  dropdownType: string;
  textColor?: string;
  labelStyle?: any;
}

const Dropdown = (props: IProps) => {
  const {
    label,
    data,
    onSelect,
    dropdownType,
    textColor,
    labelStyle,
    ...others
  } = props;

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
        onSelectItem={onSelect}
        setValue={setValue}
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
          color: 'white',
          fontWeight: '400',
          fontSize: getRespValue(28),
          fontFamily: 'aeonik',
          ...labelStyle,
        }}
        dropDownContainerStyle={{
          backgroundColor: Colors.light.theme.textDarkGray,
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
          color: 'white',
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
          backgroundColor: Colors.light.theme.textDarkGray,
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
        onSelectItem={onSelect}
        setValue={setValue}
        setItems={setItems}
        showTickIcon={false}
        dropDownDirection="BOTTOM"
        itemSeparator
        itemSeparatorStyle={{
          height: 1,
          width: '100%',
          backgroundColor: Colors.light.theme.buttonOrange,
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
          // borderColor: Colors.light.lineYellow,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        style={{
          backgroundColor: 'none',
          borderColor: '#626262',
          height: getRespValue(70),
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        placeholderStyle={{
          color: 'white',
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
          height: getRespValue(70),
        }}
        arrowIconStyle={{}}
        arrowIconContainerStyle={{
          borderColor: 'red',
        }}
        ArrowDownIconComponent={ArrowDownSVG}
        ArrowUpIconComponent={ArrowDownSVG}
        selectedItemContainerStyle={{
          backgroundColor: Colors.light.theme.backgroundDarkYellow,
        }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};
Dropdown.defaultProps = {
  textColor: Colors.light.theme.textLightGray,
  labelStyle: {},
};

const styles = StyleSheet.create({});

export default Dropdown;
