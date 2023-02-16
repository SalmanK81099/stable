/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import Input, { MyTextInputProps } from '@src/components/globals/Input';
import { getRespValue } from '@utils/design/design';
import React, { useMemo } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface MyFormikProps extends TextInputProps {
  formik: any;

  name: string;
  value?: string;
  inputProps?: MyTextInputProps;
}

const FormControlFormik = React.forwardRef<TextInput, MyFormikProps>(
  (props, ref) => {
    const { formik, name, value, inputProps, ...others } = props;

    return useMemo(() => {
      return (
        <Input
          {...inputProps}
          ref={ref}
          errorText={formik.touched[name] && formik.errors[name]}
          value={value || formik.values[name]}
          onChangeText={e =>
            formik.handleChange({ target: { name, value: e } })
          }
        />
      );
    }, [formik.values[name], formik.errors[name], formik.touched[name], value]);
  },
);

export default FormControlFormik;

FormControlFormik.defaultProps = {
  value: '',
  inputProps: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  innerContainer: {
    width: getRespValue(368),
  },
  input: {
    fontSize: getRespValue(20),
    fontFamily: 'Arial',
    width: getRespValue(307),

    paddingBottom: 5,
  },

  label: {
    fontSize: getRespValue(14),
    fontFamily: 'Arial',
    color: '#808080',
    margin: 0,
    padding: 0,
  },
});
