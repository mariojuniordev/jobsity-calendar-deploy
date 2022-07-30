import styled, { css } from 'styled-components';
import { FontWeight, TextAlign, Variant } from '../@types/text';
import { MarginProps, processMargin } from '../@types/margin';
import { PaddingProps, processPadding } from '../@types/padding';
import { DimensionsProps, processDimensions } from '../@types/dimensions';
import { BorderProps, processBorder } from '../@types/border';
import { FlexProps, processFlex } from '../@types/flex';

export interface TextProps {
  color?: string;
  fontWeight?: FontWeight;
  textAlign?: TextAlign;
  lineHeight?: string | number;
  variant?: Variant;
  fontSize?: string;
  backgroundColor?: string;
  display?: 'flex' | 'grid';
}

/**
 * switchVariant receives a variant (from h1 to h6) and
 * returns a string that represents the font size
 * for that variant as a css prop
 * @param {Variant} variant is a string (from h1 to h6) that
 * will define the font size according with the settings
 * @returns returns a string that represents the
 * variant value as a valid css prop
 * @example switchvariant('h1')
 * //returns '24px'
 */

function switchVariant(variant: Variant) {
  if (variant === 'h1') return '30px';
  if (variant === 'h2') return '24px';
  if (variant === 'h4') return '14px';
  if (variant === 'h5') return '12px';
  if (variant === 'h6') return '10px';

  return '16px';
}

/**
 * Text is a styled paragraph that receives some props to alter
 * its CSS dynamically
 * @param {string} color
 * @param {FontWeight} fontWeight
 * @param {TextAlign} textAlign
 * @param {string | number} lineHeight
 * @param {Variant} variant is the string (from h1 to h6) that represents
 * the font size
 */

export const Text = styled.p<FlexProps & TextProps & PaddingProps & MarginProps & DimensionsProps & BorderProps>`
  ${({ display, color = 'black', fontWeight = 400, textAlign, lineHeight, variant = 'h3', fontSize, backgroundColor }) => css`
    color: ${color};
    font-size: ${fontSize ?? switchVariant(variant)};
    font-weight: ${fontWeight};
    text-align: ${textAlign};
    line-height: ${lineHeight};
    background-color: ${backgroundColor};
    display: ${display};
    ${(props) => processPadding(props as PaddingProps)}
    ${(props) => processMargin(props as MarginProps)}
    ${(props) => processDimensions(props as DimensionsProps)}
    ${(props) => processBorder(props as BorderProps)}
    ${(props) => processFlex(props as FlexProps)}
  `}
`
