import { Paper, useTheme } from '@mui/material'
import React from 'react'
import Toggle, { toggleVariantType } from 'shared/ui/toggle/toggle'

function CalculatorSubmit (): JSX.Element {
  const theme = useTheme()
  return (
    <Paper elevation={0} sx={{ height: '64px', padding: theme.spacing(1) }}>
      <Toggle variant={toggleVariantType.contained}>=</Toggle>
    </Paper>
  )
}

export default CalculatorSubmit
