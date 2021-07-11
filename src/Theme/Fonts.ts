/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';

import { ThemeVariables } from './theme.type';
import { Colors, FontSize } from './Variables';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */

const styles = StyleSheet.create({
  textSmall: {
    fontSize: FontSize.small,
    color: Colors.text,
  },
  textRegular: {
    fontSize: FontSize.regular,
    color: Colors.text,
  },
  textLarge: {
    fontSize: FontSize.large,
    color: Colors.text,
  },
  titleSmall: {
    fontSize: FontSize.small * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleRegular: {
    fontSize: FontSize.regular * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleLarge: {
    fontSize: FontSize.large * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
});

export type FontOptions = typeof styles;

// eslint-disable-next-line no-empty-pattern
export default function ({}: ThemeVariables): FontOptions {
  return styles;
}
