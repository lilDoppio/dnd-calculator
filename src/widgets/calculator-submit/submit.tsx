import { Paper } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'app/store'
import { operationConclusion } from 'app/store/calculator'
import DragBlock from 'features/dragBlock/dragBlock'
import Toggle, { toggleVariantType } from 'shared/ui/toggle/toggle'

interface SubmitProps {
  inConstructor: boolean
}

function CalculatorSubmit ({ inConstructor }: SubmitProps): JSX.Element {
  const dispatch = useAppDispatch()
  const elements = useAppSelector(state => state.elements.elements)
  const isConstructorActive = useAppSelector(state => state.elements.active)
  const inList = Boolean(elements.filter(element => element.id === '4')[0])
  const onClick = (): any => {
    if (!isConstructorActive) {
      dispatch(operationConclusion())
    }
  }

  return (
    <DragBlock
      height={64}
      width={232}
      inList={inList}
      inConstructor={inConstructor}
      id='4'
    >
      <Paper
        elevation={0}
        sx={{
          pointerEvents: inList && !inConstructor ? 'all' : 'none',
          height: '100%'
        }}
      >
        <Toggle variant={toggleVariantType.contained} onClick={onClick}>
          =
        </Toggle>
      </Paper>
    </DragBlock>
  )
}

export default CalculatorSubmit
