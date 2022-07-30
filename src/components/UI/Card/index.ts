import styled, { css } from 'styled-components';
import { BorderProps, processBorder } from '../@types/border';
import { DimensionsProps, processDimensions } from '../@types/dimensions';
import { MarginProps, processMargin } from '../@types/margin';
import { PaddingProps, processPadding } from '../@types/padding';

interface AnchorProps {
  backgroundColor?: string;
  flexDirection?: string;
}

export const Anchor = styled.a<PaddingProps & MarginProps & DimensionsProps & AnchorProps & BorderProps>`
  ${({ backgroundColor, flexDirection }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    align-items: center;
    justify-content: center;
    background-color: ${backgroundColor};
    text-decoration: none;
    ${(props) => processBorder(props as BorderProps)}
    ${(props) => processDimensions(props as DimensionsProps)}
    ${(props) => processPadding(props as PaddingProps)}
    ${(props) => processMargin(props as MarginProps)}
  `}
`
