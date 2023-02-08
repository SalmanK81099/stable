/* eslint-disable import/prefer-default-export */
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const getRespValue = (percentage: number) => {
  //   console.log(width, height);
  if (height > 800) return height * (percentage / 1000);
  return (height + 60) * (percentage / 1000);
};
