/* eslint-disable react/jsx-props-no-spreading */
import BottomSheetDef from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';

interface IBottomSheetProps {
  OpenerComponent: React.FC<any>;
  openerProps: any;
  onPress: () => void;
  children: React.ReactNode;
}

const BottomSheet = (props: IBottomSheetProps) => {
  const { OpenerComponent, openerProps, onPress, children } = props;
  const [index, setIndex] = React.useState(-1);
  // ref

  // variables
  const snapPoints = useMemo(() => ['100%'], []);
  const bottomSheetRef = React.useRef<BottomSheetDef>(null);

  // callbacks
  const handleSheetChanges = useCallback((indexLocal: number) => {
    setIndex(indexLocal);
  }, []);

  // renders
  return (
    <>
      <OpenerComponent
        {...openerProps}
        onPress={() => {
          bottomSheetRef.current?.collapse();
          onPress();
        }}
      />

      <BottomSheetDef
        ref={bottomSheetRef}
        enablePanDownToClose
        index={-1}
        snapPoints={snapPoints}
        onClose={() => {
          // Keyboard.dismiss();
        }}
        onChange={handleSheetChanges}
        handleComponent={() => (
          <View className="w-full items-center">
            <View className="w-14 h-1 bg-white rounded-lg mt-6 mb-4" />
          </View>
        )}
        backgroundStyle={{
          backgroundColor: '#20201F',
          borderRadius: 0,
        }}
      >
        {children}
      </BottomSheetDef>
    </>
  );
};

export default BottomSheet;
