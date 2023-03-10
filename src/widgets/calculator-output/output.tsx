import React from 'react'
import DragBlock from 'features/dragBlock/ui'
import Input from 'shared/ui/input/input'

function CalculatorOutput (): JSX.Element {
  return (
    <DragBlock width={232} height={52} id='1'>
      <Input></Input>
    </DragBlock>
  )
}

export default CalculatorOutput
