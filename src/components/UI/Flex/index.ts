import { MarginProps, processMargin } from '../@types/margin';
import { PaddingProps, processPadding } from '../@types/padding';
import styled from 'styled-components';
import { FlexProps, processFlex } from '../@types/flex';
import { BorderProps, processBorder } from '../@types/border';

export const Flex = styled.div<FlexProps & PaddingProps & MarginProps & BorderProps>`
  display: flex;
  ${(props) => processFlex(props)}
  ${(props) => processPadding(props)}
  ${(props) => processMargin(props)}
  ${(props) => processBorder(props)}
`
