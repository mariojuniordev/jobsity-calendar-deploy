import { css } from "styled-components";

export interface DimensionsProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  borderRadius?: string;
}

/**
 * processDimensions is a function that can receive some props
 * in order to style an element using the native dimensions
 * properties of the HTML tags, it returns a series of
 * styled components CSS props
 * @param {width, height, maxWidth, maxHeight, borderRadius} props
 * @returns CSS props regarding the dimesions styling
 */

export const processDimensions = (props: DimensionsProps) => {
  const {
    width = 'auto',
    height = 'auto',
    maxWidth,
    maxHeight,
    borderRadius
  } = props

  return css`
    width: ${width};
    height: ${height};
    max-width: ${maxWidth};
    max-height: ${maxHeight};
    border-radius: ${borderRadius};
  `
}
