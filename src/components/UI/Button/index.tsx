import styled, { css } from 'styled-components';
import { BorderProps, processBorder } from '../@types/border';
import { DimensionsProps, processDimensions } from '../@types/dimensions';
import { MarginProps, processMargin } from '../@types/margin';
import { PaddingProps, processPadding } from '../@types/padding';

interface ButtonProps {
  backgroundColor?: string;
  flexDirection?: string;
  border?: string;
  alignSelf?: string;
  borderRadius?: string;
}

export const Button = styled.button<BorderProps & PaddingProps & MarginProps & DimensionsProps & ButtonProps>`
  ${({ backgroundColor, flexDirection, border, alignSelf, borderRadius }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: ${alignSelf};
    flex-direction: ${flexDirection};
    border: ${border ?? 'none'};
    background-color: ${backgroundColor};
    border-radius: ${borderRadius};
    ${(props) => processDimensions(props as DimensionsProps)}
    ${(props) => processPadding(props as PaddingProps)}
    ${(props) => processMargin(props as MarginProps)}
    ${(props) => processBorder(props as BorderProps)}
  `}
`
