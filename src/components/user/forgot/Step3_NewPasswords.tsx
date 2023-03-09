/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
import Input from '@src/components/globals/Input';
// import MotiView from '@src/components/globals/MotiView';

import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import useMyI18n from '@src/hooks/useMyI18n';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import { useToast } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line camelcase
const Step3_NewPasswords = ({ next }: MultiStepFormProps) => {
  const toast = useToast();
  const i18n = useMyI18n();
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
        <View className="px-4 pt-8 ">
          <Text
            style={{
              fontSize: getRespValue(45),
            }}
            className="font-aeonik w-3/4"
          >
            {i18n.t('screens.user.auth.forgot.step3.title')}
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
          <View className="flex-1 w-full">
            <Input
              placeholder={i18n.t('components.inputs.placeholders.password')}
              password
            />
            <Input
              placeholder={i18n.t(
                'components.inputs.placeholders.confirmPassword',
              )}
              password
            />
          </View>
          <Button onPress={() => next && next()}>
            {i18n.t('components.buttons.submit')}
          </Button>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Step3_NewPasswords;

const styles = StyleSheet.create({});