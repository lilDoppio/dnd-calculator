import { Grid } from '@mui/material'
import React from 'react'
import DragBlock from 'features/dragBlock/ui'
import Toggle, { toggleVariantType } from 'shared/ui/toggle/toggle'

export default function CalculatorDigits (): JSX.Element {
  return (
    <DragBlock width={232} height={216} id='3'>
          <Grid container spacing={2} height='calc(100% + 8px)'>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>7</Toggle>
            </Grid>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>8</Toggle>
            </Grid>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>9</Toggle>
            </Grid>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>4</Toggle>
            </Grid>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>5</Toggle>
            </Grid>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>6</Toggle>
            </Grid>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>1</Toggle>
            </Grid>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>2</Toggle>
            </Grid>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>3</Toggle>
            </Grid>
            <Grid item xs={8}>
              <Toggle variant={toggleVariantType.outlined}>0</Toggle>
            </Grid>
            <Grid item xs={4}>
              <Toggle variant={toggleVariantType.outlined}>,</Toggle>
            </Grid>
          </Grid>
    </DragBlock>
  )
}
