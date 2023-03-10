import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import React from 'react'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius
    }
  }
}))

function ToggleSwitcher (): JSX.Element {
  const [alignment, setAlignment] = React.useState('left')

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ): void => {
    setAlignment(newAlignment)
  }

  return (
    <Paper
        elevation={0}
        sx={{
          display: 'flex',
          width: 'min-content',
          flexWrap: 'wrap',
          background: '#F3F4F6'
        }}
      >
        <StyledToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            value="left"
            sx={{
              background: '#FFFFFF'
            }}
          >
            asd
          </ToggleButton>
          <ToggleButton
            value="right"
            sx={{
              background: '#FFFFFF'
            }}
          >
            qwe
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
  )
}

export default ToggleSwitcher
