import { css } from "styled-components"

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'

export type AlignItems =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'

export type FlexProps = {
  flex?: string;
  width?: string
  height?: string
  flexDirection?: FlexDirection
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  alignSelf?: AlignItems;
  gap?: string
  backgroundColor?: string;
  cursor?: string;
}

/**
 * processFlex is a function that can receive some props
 * in order to style an element using the native flex box
 * properties of the HTML tags, it returns a series of
 * styled components CSS props
 * @param {width, height, flexDirection, alignItems, alignSelf, justifyContent, gap} props
 * @returns CSS props regarding the flex box styling
 */

export const processFlex = (props: FlexProps) => {
  const {
    width = 'auto',
    height = 'auto',
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    gap,
    flex,
    backgroundColor,
    cursor
  } = props

  return css`
    flex: ${flex};
    width: ${width};
    height: ${height};
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    align-self: ${alignSelf};
    justify-content: ${justifyContent};
    gap: ${gap};
    background-color: ${backgroundColor};
    cursor: ${cursor};
  `
}
