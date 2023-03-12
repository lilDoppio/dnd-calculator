import Button from '@mui/material/Button'
import React from 'react'

export interface GridToggle {
  sx: number
  label: string
}

export enum toggleVariantType {
  text = 'text',
  contained = 'contained',
  outlined = 'outlined'
}

interface IToggle {
  children: string
  variant: toggleVariantType
  onClick?: () => {}
}

function Toggle ({ children, variant, onClick }: IToggle): JSX.Element {
  return (
    <Button
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default Toggle
