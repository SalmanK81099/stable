import BottomSheetDef from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BottomSheet = React.forwardRef((props, ref) => {
  // ref

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetDef
      enablePanDownToClose
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheetDef>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomSheet;
