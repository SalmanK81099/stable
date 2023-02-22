import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import { en, es } from './locales';

const i18n = new I18n({ en, es });

i18n.enableFallback = true;
i18n.locale = Localization.locale;

export default i18n;
