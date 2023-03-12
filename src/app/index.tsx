import { Box } from '@mui/material'
import type React from 'react'
import CalculatorDigits from 'widgets/calculator-digits/digits'
import CalculatorOutput from 'widgets/calculator-output/output'
import CalculatorSubmit from 'widgets/calculator-submit/submit'
import CalculatorOperators from 'widgets/calulator-operators/operators'
import HorizontalDivider from 'shared/ui/divider/horizontal/divider'
import VerticalDivider from 'shared/ui/divider/vaertical/divider'
import './index.css'
import { useAppSelector } from './store'
import ModeSwitcher from 'features/modeSwitcher/modeSwitcher'
import DropContainer from 'features/dropContainer/dropContainer'
import styled from '@emotion/styled'

const Body = styled(Box)({
  width: '100vw', 
  height: '100vh', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  flexDirection: 'column' 
});

const Header = styled(Box)({ 
  width: '542px', 
  display: 'flex', 
  justifyContent: 'right', 
  marginBottom: '30px' 
});

const DnDContainer = styled(Box)({ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center' 
});

const DndBlocks = styled(Box)({ 
  height: '448px', 
  width: '243px'
});

function App (): JSX.Element {
  const isConstructorActive = useAppSelector(state => state.elements.active)

  return (
    <Body>
      <Header>
        <ModeSwitcher/>
      </Header>
      <DnDContainer>
        <DndBlocks sx={{ opacity: isConstructorActive ? '1' : '0' }}>
          <CalculatorOutput inConstructor/>
          <HorizontalDivider/>
          <CalculatorOperators inConstructor/>
          <HorizontalDivider/>
          <CalculatorDigits inConstructor/>
          <HorizontalDivider/>
          <CalculatorSubmit inConstructor/>
        </DndBlocks>
        <VerticalDivider/>
        <DropContainer/>
      </DnDContainer>
    </Body>
  )
}

export default App
