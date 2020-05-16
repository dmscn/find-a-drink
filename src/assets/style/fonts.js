const fonts = [
  {
    family: 'Lato',
    weight: [400, 700, 900],
  },
  {
    family: 'Source Sans Pro',
    weight: [400],
  },
]

;[fonts.Lato, fonts.SourceSansPro] = fonts

const sizes = [10, 12, 14, 16, 20, 24, 32]

;[
  sizes.xxsmall,
  sizes.xsmall,
  sizes.small,
  sizes.medium,
  sizes.large,
  sizes.xlarge,
  sizes.xxlarge,
] = sizes

const weights = [400, 700, 900]

;[weights.regular, weights.semibold, weights.bold] = weights

const lineHeights = [12, 16, 20, 24, 32, 40]

;[
  lineHeights.xxsmall,
  lineHeights.xsmall,
  lineHeights.small,
  lineHeights.medium,
  lineHeights.large,
  lineHeights.xlarge,
  lineHeights.xxlarge,
] = lineHeights

export default {
  fonts,
  sizes,
  weights,
  lineHeights,
}
