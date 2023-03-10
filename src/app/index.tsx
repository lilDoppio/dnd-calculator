import React, { useRef } from 'react'
import CalculatorDigits from 'widgets/calculator-digits/digits'
import CalculatorOutput from 'widgets/calculator-output/output'
import CalculatorSubmit from 'widgets/calculator-submit/submit'
import CalculatorOperators from 'widgets/calulator-operators/operators'
import HorizontalDivider from 'shared/ui/divider/horizontal/divider'
import VerticalDivider from 'shared/ui/divider/vaertical/divider'
import './index.css'
import { useAppDispatch, useAppSelector } from './store'
import { addElement, selectElement } from './store/store'

function App (): JSX.Element {
  const dndRef = useRef(null)
  const dispatch = useAppDispatch()
  const elements = useAppSelector(state => state.elements.elements)
  const selectedElementId = useAppSelector(state => state.elements.selectedElementId)
  const onDrop = (element: any): any => {
    dispatch(addElement({ selectedId: selectedElementId, overId: element.id }))
    dispatch(selectElement(null))
  }

  const onDragOver = (e: any): any => {
    e.preventDefault()
  }

  return (
    <div
      style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div style={{ height: '448px', width: '243px' }}>
        <CalculatorOutput/>
        <HorizontalDivider/>
        <CalculatorOperators/>
        <HorizontalDivider/>
        <CalculatorDigits/>
        <HorizontalDivider/>
        <CalculatorSubmit/>
      </div>
      <VerticalDivider/>
      <div
        style={{ border: '2px dashed #C4C4C4', borderRadius: '6px', height: '448px', width: '243px' }}
        ref={dndRef}
        onDrop={() => onDrop(dndRef.current)}
        onDragOver={onDragOver}
      >
        {elements.map(element => {
          return (
            <div key={element.id}>
              {element.component}
            </div>
          )
        })}
        {/* <ToggleSwitcher></ToggleSwitcher> */}
      </div>
    </div>
  )
}

export default App
