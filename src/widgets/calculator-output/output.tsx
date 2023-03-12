import React from 'react'
import { useAppSelector } from 'app/store'
import DragBlock from 'features/dragBlock/dragBlock'
import Output from 'features/output/output'

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
      <Output value={inConstructor ? '' : output}/>
    </DragBlock>
  )
}

export default CalculatorOutput
