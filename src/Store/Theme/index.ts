import ChangeTheme from '@/Store/Theme/ChangeTheme';
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper';

import DefaultTheme from './DefaultTheme';

export default buildSlice('theme', [DefaultTheme, ChangeTheme], {
  theme: null,
  darkMode: null,
}).reducer;

export interface ThemeState {
  theme: string | null;
  darkMode: boolean | null;
}
