/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
// import MotiView from '@src/components/globals/MotiView';
import FormControlFormik from '@src/components/FormControlFormik';
import Dropdown from '@src/components/globals/Dropdown';
import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { useFormik } from 'formik';
import { MotiView } from 'moti';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
// eslint-disable-next-line camelcase
type ItemType = {
  // label: string;
  label: string;
  value: string;
};

const Account = ({ next }: MultiStepFormProps) => {
  const [toggleIsOn, setToggle] = useState(false);
  const [checkIsOn, setCheck] = useState('off');
  const [selected, setSelected] = useState<ItemType[]>([]);
  const data = [
    // { label: 'One', value: '1' },
    // { label: 'Two', value: '2' },
    // { label: 'Three', value: '3' },
    // { label: 'Four', value: '4' },
    // { label: 'Five', value: '5' },
    { label: 'Cop', value: '1' },
    { label: 'Mx', value: '2' },
  ];
  // new

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Required'),

      phone: Yup.string().required('Required'),

      email: Yup.string().required('Email is required'),

      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    }),

    onSubmit: values => {
      console.log(values);

      // console.log('values', values);
    },
  });
  console.log(formik.errors);
  const emailInputRef = useRef() as React.MutableRefObject<TextInput>;
  const phoneNoInputRef = useRef() as React.MutableRefObject<TextInput>;
  const passwordInputRef = useRef() as React.MutableRefObject<TextInput>;
  // const EmailInputRef = useRef(null);
  // const PhoneNoInputRef = useRef(null);
  // const PasswordInputRef = useRef(null);
  return (
    <Screen
      className={`bg-[${Colors.light.theme.yellow}]`}
      topColor={Colors.light.theme.yellow}
    >
      <MotiView
        key="createAccount"
        {...(animationConfig as object)}
        exit={{
          opacity: 0,
          translateY: -100,
        }}
        style={{
          height: getRespValue(300),
        }}
      >
        <View className="px-4 pt-8 pb-8">
          <Text
            style={{
              fontSize: getRespValue(45),
            }}
            className="font-aeonik w-3/4"
          >
            Let&apos;s create your account
          </Text>
          <Text
            style={{
              fontSize: getRespValue(30),
            }}
            className="font-aeonik pt-4 pb-4"
          >
            Please complete the information below
          </Text>
        </View>
      </MotiView>

      <View
        className={`bg-[${Colors.light.theme.darkYellow}] h-full flex-1 w-full flex-col items-start justify-start`}
      >
        <MotiView
          key="createAccountDetails"
          {...(animationConfig as object)}
          from={{
            opacity: 0,
            translateY: 100,
          }}
          exit={{
            opacity: 0,
            translateY: 100,
          }}
          style={{
            backgroundColor: Colors.light.theme.darkYellow,
          }}
          className="bg-none h-full flex-1 w-full flex-col items-start justify-start"
        >
          <FormControlFormik
            name="name"
            formik={formik}
            // ref={regulatorbodyfakeInputRef}
            inputProps={{
              placeholder: 'Name',
              blurOnSubmit: false,
              returnKeyType: 'next',
              onSubmitEditing: () => {
                if (emailInputRef?.current) {
                  emailInputRef.current.focus();
                }
                console.log('yes happened');
              },
              // style:{}
            }}
          />
          {/* <View className="flex row inset-9"> */}
          <Dropdown
            label="COP"
            data={data}
            dropdownType="sm"
            onSelect={setSelected}
          />
          {/* </View> */}
          <FormControlFormik
            name="email"
            formik={formik}
            inputProps={{
              placeholder: 'Email',
              blurOnSubmit: false,
              returnKeyType: 'next',
              onSubmitEditing: () => {
                if (phoneNoInputRef?.current) phoneNoInputRef.current.focus();
              },
              // style:{}
            }}
            ref={emailInputRef}
          />
          {!!selected && (
            <Text>
              Selected: label = {selected.label} and value = {selected.value}
            </Text>
          )}

          <FormControlFormik
            name="phone"
            formik={formik}
            ref={phoneNoInputRef}
            inputProps={{
              placeholder: 'phone Number',
              blurOnSubmit: false,
              returnKeyType: 'next',
              onSubmitEditing: () => {
                if (passwordInputRef?.current) passwordInputRef.current.focus();
              },
              // style:{}
            }}
          />
          <Dropdown
            label="COP"
            data={data}
            zIndex={3000}
            zIndexInverse={1000}
            dropdownType="lg"
            onSelect={setSelected}
          />
          <Dropdown
            label="COP"
            data={data}
            zIndex={2000}
            zIndexInverse={2000}
            dropdownType="lg"
            onSelect={setSelected}
          />

          <FormControlFormik
            name="password"
            formik={formik}
            inputProps={{
              placeholder: 'Password',
              blurOnSubmit: true,
              returnKeyType: 'done',
              // style:{}
            }}
            ref={passwordInputRef}
          />

          {/* <Input placeholder="Email" error />
          <PhoneInput placeholder="Enter phone Number" />
          <Input placeholder="Create Password" password /> */}
          {/* <Switch
            isOn={toggleIsOn}
            onToggle={() => {
              setToggle(!toggleIsOn);
            }}
            label="Enable face ID"
          />
          <Checkbox
            className="mt-auto"
            label="I agree to the Terms of Service and Privacy Policy"
            value={checkIsOn}
            onChange={() => {
              setCheck(preVal => (preVal === 'on' ? 'off' : 'on'));
            }}
          /> */}
          <Button
            // source={require('@assets/icons/arrow-right-black.png')}
            onPress={() => formik.handleSubmit()}
          >
            Continue
          </Button>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Account;

const styles = StyleSheet.create({});

// import Dropdown from '@src/components/globals/Dropdown';
// import React, { FC, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const App: FC = () => {
//   const [selected, setSelected] = useState(undefined);
//   const data = [
//     { label: 'One', value: '1' },
//     { label: 'Two', value: '2' },
//     { label: 'Three', value: '3' },
//     { label: 'Four', value: '4' },
//     { label: 'Five', value: '5' },
//   ];

//   return (
//     <View style={styles.container}>
//       {!!selected && (
//         <Text>
//           Selected: label = {selected.label} and value = {selected.value}
//         </Text>
//       )}
//       <Dropdown label="Select Item" data={data} onSelect={setSelected} />
//       <Text>This is the rest of the form.</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//   },
// });

// export default App;
