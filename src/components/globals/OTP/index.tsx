/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */
import Colors from '@src/constants/Colors';
import OTPInputView, {
  InputProps,
} from '@twotalltotems/react-native-otp-input';
import { getRespValue } from '@utils/design/design';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  addListener,
  getHash,
  getOtp,
  removeListener,
  useOtpVerify,
} from 'react-native-otp-verify';

const OTP = (props: InputProps) => {
  const { pinCount, code, onCodeFilled } = props;

  const [otpCode, setOtpCode] = React.useState<string | null>();

  const { hash } = useOtpVerify();

  useEffect(() => {
    if (otpCode && otpCode.length === 6) {
      if (onCodeFilled) onCodeFilled(otpCode);
    }
  }, [otpCode]);

  const listenOTP = (message: any) => {
    console.log('message', message);
    const otpnew = /(\d{6})/g.exec(message)?.[0];
    setOtpCode(otpnew);
  };

  useEffect(() => {
    getHash()
      .then((hash1: string[]) => {
        // use this hash in the message.
        console.log('hash', hash1);
      })
      .catch(console.log);

    getOtp()
      .then(p => addListener(listenOTP))
      .catch(console.log);

    return () => {
      setOtpCode(null);
      removeListener();
    };
  }, []);

  return (
    <OTPInputView
      {...props}
      pinCount={pinCount || 6}
      style={{
        height: getRespValue(100),
        width: '90%',
      }}
      code={otpCode || code}
      onCodeFilled={onCodeFilled}
      //   ref={inputRef}
      autoFocusOnLoad={false}
      codeInputFieldStyle={{
        borderWidth: 0,
        color: '#000',
        fontSize: getRespValue(30),
        fontFamily: 'aeonik',
        height: getRespValue(78),
        backgroundColor: Colors.light.theme.moreDarkYellow,
      }}
    />
  );
};

OTP.defaultProps = {
  pinCount: 6,
};

export default OTP;

const styles = StyleSheet.create({});
