import { Grid } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'app/store'
import { addDigit } from 'app/store/calculator'
import DragBlock from 'features/dragBlock/dragBlock'
import Toggle, { toggleVariantType } from 'shared/ui/toggle/toggle'
import { gridToggles } from './consts'
interface DigitsProps {
  inConstructor: boolean
}

export default function CalculatorDigits ({ inConstructor }: DigitsProps): JSX.Element {
  const dispatch = useAppDispatch()
  const elements = useAppSelector(state => state.elements.elements)
  const isConstructorActive = useAppSelector(state => state.elements.active)
  const inList = Boolean(elements.filter(element => element.id === '3')[0])

  const onClick = (value: any): any => {
    if (!isConstructorActive) {
      dispatch(addDigit(value))
    }
  }

  return (
    <DragBlock
      width={232}
      height={216}
      inList={inList}
      inConstructor={inConstructor}
      id='3'
    >
      <Grid
        container
        spacing={2}
        height='calc(100% + 8px)'
        sx={{ pointerEvents: inList && !inConstructor ? 'all' : 'none' }}
      >
        {gridToggles.map(toggle => {
          return (
            <Grid item xs={toggle.sx} key={toggle.label}>
              <Toggle variant={toggleVariantType.outlined} onClick={() => onClick(toggle.label)}>{toggle.label}</Toggle>
            </Grid>
          )
        })}
      </Grid>
    </DragBlock>
  )
}
