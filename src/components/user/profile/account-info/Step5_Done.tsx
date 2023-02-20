/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import backgroundImage from '@assets/images/background-green.png';
import { useNavigation } from '@react-navigation/native';
import Button from '@src/components/globals/Button';
import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Step5_Done = ({ goTo, back }: MultiStepFormProps) => {
  const navigation = useNavigation();
  return (
    <MotiView
      style={{
        flex: 1,
      }}
      {...(animationConfig as object)}
      key="confirm-password-screen"
      exit={{
        opacity: 0.6,
      }}
      from={{
        opacity: 0.6,
      }}
    >
      <Screen topColor={Colors.light.theme.backgroundLightGreen}>
        <ImageBackground
          source={backgroundImage}
          style={{
            flex: 1,
          }}
          className="flex-1 items-end justify-end"
        >
          <View className="w-full h-3/4 flex-col justify-between">
            <MotiView
              key="done"
              {...(animationConfig as object)}
              exit={{
                translateX: -100,
                opacity: 0,
              }}
              from={{
                translateX: -100,
                opacity: 0,
              }}
            >
              <Text
                style={{
                  fontSize: getRespValue(45),
                }}
                className="font-aeonik px-4 w-3/4"
              >
                You&apos;re account password has been changed
              </Text>
            </MotiView>
            <MotiView
              key="done-button"
              {...(animationConfig as object)}
              exit={{
                opacity: 0,
                translateY: 100,
              }}
              from={{
                opacity: 1,
                translateY: 100,
              }}
            >
              <Button
                buttonStyles={{
                  backgroundColor: Colors.light.theme.buttonGreen,
                }}
                onPress={() => {
                  navigation.navigate('Profile' as never);
                }}
              >
                Back to profile
              </Button>
            </MotiView>
          </View>
        </ImageBackground>
      </Screen>
    </MotiView>
  );
};

export default Step5_Done;

const styles = StyleSheet.create({});
