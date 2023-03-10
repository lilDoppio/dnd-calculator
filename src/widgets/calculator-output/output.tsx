import { Paper, useTheme } from '@mui/material'
import React from 'react'
import Input from 'shared/ui/input/input'

function CalculatorOutput (): JSX.Element {
  const theme = useTheme()
  return (
      <Paper elevation={0} sx={{ height: '52px', padding: theme.spacing(1) }}>
        <Input></Input>
      </Paper>
  )
}

export default CalculatorOutput
