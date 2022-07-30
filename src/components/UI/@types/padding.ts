import { css } from 'styled-components'

export interface PaddingProps {
  pt?: string
  pb?: string
  pl?: string
  pr?: string
  p?: string
}

/**
 * processFlex is a function that can receive some props
 * in order to style an element using the native padding
 * properties of the HTML tags, it returns a series of
 * styled components CSS props
 * @param {p, pt, pb, pl, pr} props
 * @returns CSS props regarding the padding styling
 */

export const processPadding = (props: PaddingProps) => {
  const { pt, pb, pl, pr, p } = props
  return css`
    padding: ${p};
    padding-top: ${pt};
    padding-bottom: ${pb};
    padding-left: ${pl};
    padding-right: ${pr};
  `
}
