import type { BorderStyleProperty } from 'csstype';

import type { GriffelStylesStrictCSSObject } from '../types';
import { generateStyles } from './generateStyles';

type BorderStyleStyle = Pick<
  GriffelStylesStrictCSSObject,
  'borderTopStyle' | 'borderRightStyle' | 'borderBottomStyle' | 'borderLeftStyle'
>;

export function borderStyle(all: BorderStyleProperty): BorderStyleStyle;
export function borderStyle(vertical: BorderStyleProperty, horizontal: BorderStyleProperty): BorderStyleStyle;
export function borderStyle(
  top: BorderStyleProperty,
  horizontal: BorderStyleProperty,
  bottom: BorderStyleProperty,
): BorderStyleStyle;
export function borderStyle(
  top: BorderStyleProperty,
  right: BorderStyleProperty,
  bottom: BorderStyleProperty,
  left: BorderStyleProperty,
): BorderStyleStyle;

/**
 * A function that implements CSS spec conformant expansion for "borderStyle"
 *
 * @example
 *  borderStyle('solid')
 *  borderStyle('solid', 'dashed')
 *  borderStyle('solid', 'dashed', 'dotted')
 *  borderStyle('solid', 'dashed', 'dotted', 'double')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
 */
export function borderStyle(...values: BorderStyleProperty[]): BorderStyleStyle {
  return generateStyles('border', 'Style', ...values);
}
