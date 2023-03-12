import { Typography, useTheme } from '@mui/material'
import type React from 'react'
import { useRef } from 'react'
import CalculatorDigits from 'widgets/calculator-digits/digits'
import CalculatorOutput from 'widgets/calculator-output/output'
import CalculatorSubmit from 'widgets/calculator-submit/submit'
import CalculatorOperators from 'widgets/calulator-operators/operators'
import PlusPicture from 'shared/icons/plus'
import HorizontalDivider from 'shared/ui/divider/horizontal/divider'
import VerticalDivider from 'shared/ui/divider/vaertical/divider'
import './index.css'
import ToggleSwitcher from 'shared/ui/switch/switch'
import { useAppDispatch, useAppSelector } from './store'
import { addElement, selectElement } from './store/constructor'

function App (): JSX.Element {
  const theme = useTheme()
  const dndRef = useRef(null)
  const dispatch = useAppDispatch()
  const elements = useAppSelector(state => state.elements.elements)
  const isConstructorActive = useAppSelector(state => state.elements.active)
  const selectedElementId = useAppSelector(state => state.elements.selectedElementId)
  const onDrop = (element: HTMLElement | null): void => {
    dispatch(addElement({ selectedId: selectedElementId, overId: element?.id }))
    dispatch(selectElement(null))
  }

  const onDragOver = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
  }

  return (
    <div
      style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <div style={{ width: '542px', display: 'flex', justifyContent: 'right', marginBottom: '30px' }}>
        <ToggleSwitcher></ToggleSwitcher>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ height: '448px', width: '243px', opacity: isConstructorActive ? '1' : '0' }}>
          <CalculatorOutput inConstructor/>
          <HorizontalDivider/>
          <CalculatorOperators inConstructor/>
          <HorizontalDivider/>
          <CalculatorDigits inConstructor/>
          <HorizontalDivider/>
          <CalculatorSubmit inConstructor/>
        </div>
        <VerticalDivider/>
        <div
          style={{ height: '448px', width: '243px' }}
          ref={dndRef}
          onDrop={() => { onDrop(dndRef.current) }}
          onDragOver={onDragOver}
        >
          {(elements.length > 0)
            ? elements.map(element => {
              return (
              <div key={element.id}>
                {element.component}
              </div>
              )
            })
            : <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '2px dashed #C4C4C4', borderRadius: '6px', height: '448px', width: '243px' }}>
            <PlusPicture/>
            <Typography variant='body1' mt={theme.spacing(3)} sx={{ color: theme.palette.primary.main }}>Перетащите сюда</Typography>
            <Typography variant='body2' sx={{ color: '#6B7280', textAlign: 'center' }}>любой элемент<br/>из левой панели</Typography>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default App
