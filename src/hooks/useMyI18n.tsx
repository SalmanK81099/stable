import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { useSelector } from 'react-redux';

import { en, es } from '../../i18n/locales';

const useMyI18n = () => {
  const userLocale = useSelector(state => (state as any).user.local);
  const i18n = new I18n({ en, es });

  i18n.enableFallback = true;
  i18n.locale = userLocale || Localization.locale;

  return i18n;
};

export default useMyI18n;
