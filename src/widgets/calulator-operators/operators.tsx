import { Grid, Paper, useTheme } from '@mui/material'
import React from 'react'
import Toggle, { toggleVariantType } from 'shared/ui/toggle/toggle'

function CalculatorOperators (): JSX.Element {
  const theme = useTheme()
  return (
    <Paper elevation={0} sx={{ height: '48px', padding: theme.spacing(1) }}>
      <Grid container spacing={2} height={56}>
        <Grid item xs={3}>
          <Toggle variant={toggleVariantType.outlined}>/</Toggle>
        </Grid>
        <Grid item xs={3}>
          <Toggle variant={toggleVariantType.outlined}>x</Toggle>
        </Grid>
        <Grid item xs={3}>
          <Toggle variant={toggleVariantType.outlined}>-</Toggle>
        </Grid>
        <Grid item xs={3}>
          <Toggle variant={toggleVariantType.outlined}>+</Toggle>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CalculatorOperators
