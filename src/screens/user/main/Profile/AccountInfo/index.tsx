/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import Step1_Overview from '@src/components/user/profile/account-info/Step1_Overview';
import Step2_CurrentPassword from '@src/components/user/profile/account-info/Step2_CurrentPassword';
import Step3_NewPassword from '@src/components/user/profile/account-info/Step3_NewPassword';
import Step4_ConfirmPassword from '@src/components/user/profile/account-info/Step4_ConfirmPassword';
import Step5_Done from '@src/components/user/profile/account-info/Step5_Done';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import { AnimatePresence } from 'moti';

const AccountInfo = () => {
  const { step } = useMultistepForm([
    <Step1_Overview />,
    <Step2_CurrentPassword />,
    <Step3_NewPassword />,
    <Step4_ConfirmPassword />,
    <Step5_Done />,
  ]);

  return <AnimatePresence exitBeforeEnter>{step}</AnimatePresence>;
};

export default AccountInfo;
