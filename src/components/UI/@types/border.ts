import { css } from "styled-components";

export interface BorderProps {
  border?: string;
  borderBottom?: string;
  borderTop?: string;
  borderRight?: string;
  borderLeft?: string;
  borderRadius?: string;
}

/**
 * processBorder is a function that can receive some props
 * in order to style an element using the native border
 * properties of the HTML tags, it returns a series of
 * styled components CSS props
 * @param {border, borderBottom, borderTop, borderRight, borderLeft} props
 * @returns CSS props regarding the border styling
 */

export const processBorder = (props: BorderProps) => {
  const {
    border,
    borderBottom,
    borderTop,
    borderRight,
    borderLeft,
    borderRadius
  } = props

  return css`
    border: ${border};
    border-bottom: ${borderBottom};
    border-top: ${borderTop};
    border-right: ${borderRight};
    border-left: ${borderLeft};
    border-radius: ${borderRadius};
  `
}
