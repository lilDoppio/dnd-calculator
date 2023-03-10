import React from 'react'
import DragBlock from 'features/dragBlock/ui'
import Toggle, { toggleVariantType } from 'shared/ui/toggle/toggle'

function CalculatorSubmit (): JSX.Element {
  return (
    <DragBlock height={64} width={232} id='4'>
      <Toggle variant={toggleVariantType.contained}>=</Toggle>
    </DragBlock>
  )
}

export default CalculatorSubmit
