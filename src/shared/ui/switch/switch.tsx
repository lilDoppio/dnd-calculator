import { useTheme } from '@mui/material'
import Paper from '@mui/material/Paper'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import React from 'react'

interface ToggleSwitcherProps {
  children: JSX.Element | JSX.Element[]
  value: string
  onChange: (event: React.MouseEvent<HTMLElement>, newAlignment: string) => void
}

function ToggleSwitcher ({ children, value, onChange }: ToggleSwitcherProps): JSX.Element {
  const theme = useTheme()
  return (
    <Paper
        elevation={0}
        sx={{
          display: 'flex',
          width: '243px',
          flexWrap: 'wrap',
          backgroundColor: theme.palette.secondary.light,
          borderRadius: '5px',
          padding: '1px'
        }}
      >
        <ToggleButtonGroup
          value={value}
          exclusive
          onChange={onChange}
          sx={{
            width: '100%',
            height: '38px'
          }}
        >
          {children}
        </ToggleButtonGroup>
      </Paper>
  )
}

export default ToggleSwitcher
