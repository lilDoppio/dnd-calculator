import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import { type ReactNode } from 'react'
import CalculatorDigits from 'widgets/calculator-digits/digits'
import CalculatorOutput from 'widgets/calculator-output/output'
import CalculatorSubmit from 'widgets/calculator-submit/submit'
import CalculatorOperators from 'widgets/calulator-operators/operators'

const calculatorElements = [
  {
    id: '3',
    component: <CalculatorDigits/>
  },
  {
    id: '1',
    component: <CalculatorOutput/>
  },
  {
    id: '2',
    component: <CalculatorOperators/>
  },
  {
    id: '4',
    component: <CalculatorSubmit/>
  }
]

interface Element {
  id: string
  component: ReactNode
}

interface ElementsState {
  elements: Element[]
  selectedElementId: number | null
  deleteElementId: number | null
}

const initialState: ElementsState = {
  elements: [],
  selectedElementId: null,
  deleteElementId: null
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<any>) => {
      const [selectedElement] = calculatorElements.filter(element => element.id === action.payload.selectedId)
      const isOverElement = Boolean(action.payload.overId)
      if (isOverElement) {
        state.elements = state.elements.filter(element => element.id !== action.payload.selectedId)
        const overElementIndex = (element: any): any => element.id === action.payload.overId
        state.elements.splice(state.elements.findIndex(overElementIndex), 0, selectedElement)
      } else {
        state.elements.push(selectedElement)
      }
    },
    selectElement: (state, action: PayloadAction<any>) => {
      state.selectedElementId = action.payload
    },
    deleteElement: (state, action: PayloadAction<any>) => {
      state.elements = state.elements.filter(element => element.id !== action.payload)
    }
  }
})

export const { addElement, selectElement, deleteElement } = calculatorSlice.actions

export default calculatorSlice.reducer
