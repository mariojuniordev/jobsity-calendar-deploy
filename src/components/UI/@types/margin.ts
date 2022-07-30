import { css } from 'styled-components'

export interface MarginProps {
  mt?: string
  mb?: string
  ml?: string
  mr?: string
  m?: string
}

/**
 * processFlex is a function that can receive some props
 * in order to style an element using the native margin
 * properties of the HTML tags, it returns a series of
 * styled components CSS props
 * @param {m, mt, mb, ml, mr} props
 * @returns CSS props regarding the margin styling
 */

export const processMargin = (props: MarginProps) => {
  const { mt, mb, ml, mr, m } = props

  return css`
    margin: ${m};
    margin-top: ${mt};
    margin-bottom: ${mb};
    margin-left: ${ml};
    margin-right: ${mr};
  `
}
