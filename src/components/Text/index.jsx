import styled, { css } from 'styled-components'

const specs = {
  header: {
    family: 'Lato',
    size: 'xxlarge',
    weight: 'bold',
    lineHeight: 'xlarge',
  },
  title: {
    family: 'Lato',
    size: 'xlarge',
    weight: 'regular',
    lineHeight: 'medium',
  },
  body: {
    family: 'SourceSansPro',
    size: 'medium',
    weight: 'semibold',
    lineHeight: 'small',
  },
  small: {
    family: 'SourceSansPro',
    size: 'small',
    weight: 'regular',
    lineHeight: 'xsmall',
  },
  tiny: {
    family: 'SourceSansPro',
    size: 'xsmall',
    weight: 'regular',
    lineHeight: 'xxsmall',
  },
}

const getVariantStyles = variant => (themeProps, prop) =>
  themeProps[specs[variant][prop]]

const Text = styled.span`
  ${({ variant = 'body', strong, theme: { fonts } }) => {
    const getProperty = getVariantStyles(variant)
    return css`
      font-family: ${getProperty(fonts, 'family')};
      font-size: ${getProperty(fonts.sizes, 'size')}px;
      line-height: ${getProperty(fonts.lineHeights, 'lineHeight')}px;
      font-weight: ${strong
        ? fonts.weights.bold
        : getProperty(fonts.weights, 'weight')};
    `
  }}
`

export default Text
