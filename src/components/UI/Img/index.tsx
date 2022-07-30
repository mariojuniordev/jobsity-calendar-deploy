import styled from 'styled-components';
import { DimensionsProps, processDimensions } from '../@types/dimensions';
import { MarginProps, processMargin } from '../@types/margin';
import { PaddingProps, processPadding } from '../@types/padding';

export const Img = styled.img<PaddingProps & MarginProps & DimensionsProps>`
  ${(props) => processPadding(props)}
  ${(props) => processMargin(props)}
  ${(props) => processDimensions(props)}
`
