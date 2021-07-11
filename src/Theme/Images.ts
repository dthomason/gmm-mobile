/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */

import { ThemeVariables } from './theme.type';

const images = {
  logo: require('@/Assets/Images/gmm_logo3x.png'),
};

export type ImageOptions = typeof images;

// eslint-disable-next-line no-empty-pattern
export default function ({}: ThemeVariables): ImageOptions {
  return images;
}
