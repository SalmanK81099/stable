/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button as ButtonPaper, ButtonProps } from 'react-native-paper';

interface MyButtonProps extends ButtonProps {
  buttonStyles?: any;
  light?: boolean;
}

const Button = (props: MyButtonProps) => {
  const { buttonStyles, children, light, disabled, className, ...others } =
    props;
  return (
    <ButtonPaper
      {...others}
      style={{ ...styles, ...buttonStyles }}
      className={`w-100 h-[70px] rounded-none   ${
        light ? 'bg-[#FFF7C6]' : 'bg-[#EAB67D]'
      }  ${className} ${disabled ? 'bg-[#EFEFEF]' : ''}`}
    >
      <View className="flex-row justify-between items-center h-full px-3">
        <Text className={`font-aeonik text-xl ${disabled ? 'opacity-20' : ''}`}>
          {children}
        </Text>
        <Image
          // eslint-disable-next-line global-require
          source={require('@assets/icons/arrow-right-black.png')}
          className={`w-9 h-9 ${disabled ? 'opacity-20' : ''}`}
        />
      </View>
    </ButtonPaper>
  );
};

export default Button;

Button.defaultProps = {
  buttonStyles: {},
  light: false,
};

const styles = StyleSheet.create({});
