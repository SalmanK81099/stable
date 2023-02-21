import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import { en } from './locales';

const i18n = new I18n({ en });

i18n.enableFallback = true;
i18n.locale = Localization.locale;

export default i18n;
