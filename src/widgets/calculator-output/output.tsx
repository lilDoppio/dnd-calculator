import React from 'react'
import { useAppSelector } from 'app/store'
import DragBlock from 'features/dragBlock/ui'
import Input from 'shared/ui/input/input'

interface OutputProps {
  inConstructor: boolean
}

function CalculatorOutput ({ inConstructor }: OutputProps): JSX.Element {
  const elements = useAppSelector(state => state.elements.elements)
  const output = useAppSelector(state => state.calculator.output)
  const [inList] = elements.filter(element => element.id === '1')
  return (
    <DragBlock
      width={232}
      height={52}
      inList={Boolean(inList)}
      inConstructor={inConstructor}
      id='1'
    >
      <Input value={inConstructor ? '' : output}></Input>
    </DragBlock>
  )
}

export default CalculatorOutput
