import { Grid } from '@mui/material'
import React from 'react'
import DragBlock from 'features/dragBlock/ui'
import Toggle, { toggleVariantType } from 'shared/ui/toggle/toggle'

function CalculatorOperators (): JSX.Element {
  return (
    <DragBlock height={48} width={232} id='2'>
      <Grid container spacing={2} height='56px'>
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
    </DragBlock>
  )
}

export default CalculatorOperators
