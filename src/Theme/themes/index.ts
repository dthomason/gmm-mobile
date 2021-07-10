import * as default_dark from './default_dark'
import { Theme } from '@/Theme/theme.type'
import * as custom from './custom'

type Themes = { [key: string]: Partial<Theme> }

export default {
  default_dark,
  custom,
} as Themes
