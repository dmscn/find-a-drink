import React from 'react'
import styled, { css } from 'styled-components'
import Text from '@components/Text'

const Container = styled.section`
  ${({ theme: { spacing } }) => css`
    width: ${spacing.xlarge}vw;
  `}
`

const TextField = styled.input`
  ${({ theme: { spacing, colors, elevations, fonts } }) => css`
    width: 100%;
    height: ${spacing.xxlarge}px;
    padding: ${spacing.xlarge}px ${spacing.xsmall}px;

    background-color: ${colors.gray[1]};
    color: ${colors.gray.dark};
    font-family: ${fonts.SourceSansPro};
    font-size: ${fonts.sizes.medium};

    outline: none;
    border: 2px solid ${colors.gray[3]};
    border-radius: ${spacing.xxsmall}px;
    box-shadow: ${elevations.small};

    &:focus {
      border: 2px solid ${colors.primary[1]};
      background-color: ${colors.white};
    }
  `}
`

const Menu = styled.ul`
  ${({ theme: { spacing, elevations } }) => css`
    position: absolute;
    width: ${spacing.xlarge}vw;
    max-height: ${spacing.huge * 4}px;
    margin: ${spacing.xsmall}px 0;
    padding: 0;

    border-radius: ${spacing.xxsmall}px;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: ${elevations.small};
    list-style-type: none;
    z-index: 1;
  `}
`

const MenuItem = styled.li`
  ${({ theme: { spacing, colors } }) => css`
    padding: ${spacing.small}px ${spacing.xsmall}px;
    background-color: ${colors.gray[0]};
    cursor: pointer;

    &:hover {
      background-color: ${colors.gray[1]};
    }

    &:not(:last-child) {
      border-bottom: 2px solid ${colors.gray[1]};
    }
  `}
`

const Autocomplete = ({ suggestions, isLoading, onSelection, ...props }) => (
  <Container>
    <TextField {...props} />
    {suggestions ? (
      <Menu>
        {isLoading ? (
          <MenuItem>
            <Text variant="small">Buscando...</Text>
          </MenuItem>
        ) : (
          suggestions.map(suggestion => {
            const { value, label } = suggestion

            return (
              <MenuItem key={value} onClick={() => onSelection(suggestion)}>
                <Text variant="small">{label}</Text>
              </MenuItem>
            )
          })
        )}
      </Menu>
    ) : null}
  </Container>
)

export default Autocomplete
