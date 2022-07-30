import styled, { css } from 'styled-components'
import { DimensionsProps, processDimensions } from '../@types/dimensions'
import { MarginProps, processMargin } from '../@types/margin'
import { PaddingProps, processPadding } from '../@types/padding'

interface InputProps {
  border?: string;
  borderRadius?: string;
}

export const Input = styled.input<PaddingProps & MarginProps & DimensionsProps & InputProps>`
  ${({ border, borderRadius }) => css`
    border: ${border};
    border-radius: ${borderRadius};
    font-style: italic;
    ${(props) => processDimensions(props as DimensionsProps)}
    ${(props) => processPadding(props as PaddingProps)}
    ${(props) => processMargin(props as MarginProps)}
  `}
`
