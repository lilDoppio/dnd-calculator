import { Grid } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'app/store'
import { addOperation, operationConclusion } from 'app/store/calculator'
import DragBlock from 'features/dragBlock/dragBlock'
import Toggle, { toggleVariantType } from 'shared/ui/toggle/toggle'
import { gridToggles } from './consts'

interface OperatorsProps {
  inConstructor: boolean
}

function CalculatorOperators ({ inConstructor }: OperatorsProps): JSX.Element {
  const dispatch = useAppDispatch()
  const elements = useAppSelector(state => state.elements.elements)
  const isConstructorActive = useAppSelector(state => state.elements.active)
  const inList = Boolean(elements.filter(element => element.id === '2')[0])

  const onClick = (value: any): any => {
    if (!isConstructorActive) {
      dispatch(operationConclusion())
      dispatch(addOperation(value))
    }
  }

  return (
    <DragBlock
      height={48}
      width={232}
      inList={inList}
      inConstructor={inConstructor}
      id='2'
    >
      <Grid
        container
        spacing={2}
        height='56px'
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

export default CalculatorOperators
