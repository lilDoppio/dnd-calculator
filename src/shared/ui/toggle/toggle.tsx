// import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'

export enum toggleVariantType {
  text = 'text',
  contained = 'contained',
  outlined = 'outlined'
}

interface IToggle {
  children: string
  variant: toggleVariantType
}

function Toggle ({ children, variant }: IToggle): JSX.Element {
  // const theme = useTheme()
  return (
    <Button
      variant={variant}
      sx={{
        pointerEvents: 'none'
      }}
    >
      {children}
    </Button>
  )
}

export default Toggle
