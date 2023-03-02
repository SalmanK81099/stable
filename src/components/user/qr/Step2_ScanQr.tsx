/* eslint-disable no-alert */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { getRespValue } from '@utils/design/design';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Step2_ScanQr = ({ back, next }: MultiStepFormProps) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ScreenAuth
      appBarProps={{
        profileMoti: true,
        profileColor: Colors.light.background,

        onPress: () => back && back(),
        disableEndMoti: true,
      }}
      topColor={Colors.light.background}
    >
      <View className=" w-[90%] h-[90%]  p-9 ">
        <View>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.container}
          />
          {scanned && (
            <Button
              title="Tap to Scan Again"
              onPress={() => setScanned(false)}
            />
          )}
        </View>
      </View>
      {/* <View>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.container}
        />
         {scanned && (
          <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
        )} 
      </View> */}
    </ScreenAuth>
  );
};

export default Step2_ScanQr;

const styles = StyleSheet.create({
  container: {
    height: getRespValue(275),
    width: getRespValue(275),
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#000000',
  },
});
