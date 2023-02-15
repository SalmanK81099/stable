/* eslint-disable react/jsx-props-no-spreading */
import BottomSheetDef from '@gorhom/bottom-sheet';
import { getRespValue } from '@utils/design/design';
import React, { useCallback, useMemo } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../globals/Button';
import Input from '../../globals/Input';
import PhoneInput from '../../globals/PhoneInput';

const BottomSheetButtonOTP = (props: any) => {
  const { title } = props;
  const [index, setIndex] = React.useState(-1);
  // ref

  // variables
  const snapPoints = useMemo(() => ['100%'], []);
  const bottomSheetRef = React.useRef<BottomSheetDef>(null);

  // callbacks
  const handleSheetChanges = useCallback((indexLocal: number) => {
    console.log('handleSheetChanges', indexLocal);
    setIndex(indexLocal);
  }, []);

  // renders
  return (
    <>
      <Button onPress={() => bottomSheetRef.current?.collapse()}>
        {title}
      </Button>

      <BottomSheetDef
        ref={bottomSheetRef}
        enablePanDownToClose
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleComponent={() => (
          <View className="w-full items-center">
            <View className="w-14 h-1 bg-white rounded-lg mt-6" />
          </View>
        )}
        backgroundStyle={{
          backgroundColor: '#20201F',
          borderRadius: 0,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 40}
          className="flex-1 items-left justify-end"
        >
          <Text
            style={{
              fontSize: getRespValue(38),
            }}
            className="text-[#FFF7C6] font-aeonik px-4 pb-6 w-3/4"
          >
            Please confirm your information
          </Text>
          <PhoneInput
            style={{
              backgroundColor: '#20201F',
              borderBottomWidth: 0,
              borderTopWidth: 1,
              borderColor: '#626262',
            }}
            textStyle={{
              color: '#fff',
            }}
            placeholder="Enter your phone number"
          />
          <Input
            style={{
              backgroundColor: '#20201F',
              borderBottomWidth: 0,
              borderTopWidth: 1,
              borderColor: '#626262',
              color: '#fff',
            }}
            className="!border-b-0 border-t-2 border-t-[#626262]"
            placeholder="Enter your email"
          />

          <Button onPress={() => bottomSheetRef.current?.expand()}>
            Resend code to my phone
          </Button>
          <Button light onPress={() => bottomSheetRef.current?.expand()}>
            Resend code to my email
          </Button>
        </KeyboardAvoidingView>
      </BottomSheetDef>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 0,
  },
});

export default BottomSheetButtonOTP;
