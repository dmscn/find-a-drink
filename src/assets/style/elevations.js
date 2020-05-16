import hexToRgb from '@utils/hexToRgb'
import colors from './colors'

export function elevate(color = '#000', level) {
  const normalizedColor = hexToRgb(color, 0.25)
  const elevations = [
    'none',
    `0 2px 6px ${normalizedColor}`,
    `0 4px 12px ${normalizedColor}`,
    `0 8px 20px ${normalizedColor}`,
  ]

  return level ? elevations[level] : elevations
}

const elevations = elevate(colors.gray[7])

;[
  elevations.zero,
  elevations.small,
  elevations.medium,
  elevations.large,
] = elevations

export default elevations
