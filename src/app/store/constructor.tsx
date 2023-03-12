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
    component: <CalculatorDigits inConstructor={false}/>
  },
  {
    id: '1',
    component: <CalculatorOutput inConstructor={false}/>
  },
  {
    id: '2',
    component: <CalculatorOperators inConstructor={false}/>
  },
  {
    id: '4',
    component: <CalculatorSubmit inConstructor={false}/>
  }
]

interface Element {
  id: string
  component: ReactNode
}

interface ElementsState {
  elements: Element[]
  selectedElementId: number | null
  overElementId: string | null
  deleteElementId: number | null
  active: boolean
}

const initialState: ElementsState = {
  elements: [],
  selectedElementId: null,
  overElementId: null,
  deleteElementId: null,
  active: false
}

export const constructorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<any>) => {
      const inList = Boolean(state.elements.filter(element => element.id === action.payload.selectedId).length)
      const [selectedElement] = calculatorElements.filter(element => element.id === action.payload.selectedId)
      if (!inList) {
        const isOverElement = Boolean(action.payload.overId)
        if (isOverElement) {
          state.elements = state.elements.filter(element => element.id !== action.payload.selectedId)
          const overElementIndex = (element: any): any => element.id === action.payload.overId
          state.elements.splice(state.elements.findIndex(overElementIndex), 0, selectedElement)
        } else {
          state.elements.push(selectedElement)
        }
      } else {
        const isOverElement = Boolean(action.payload.overId)
        if (isOverElement) {
          state.elements = state.elements.filter(element => element.id !== action.payload.selectedId)
          const overElementIndex = (element: any): any => element.id === action.payload.overId
          state.elements.splice(state.elements.findIndex(overElementIndex), 0, selectedElement)
        }
      }
    },
    selectElement: (state, action: PayloadAction<any>) => {
      state.selectedElementId = action.payload
    },
    setOverElement: (state, action: PayloadAction<any>) => {
      state.overElementId = action.payload
    },
    deleteElement: (state, action: PayloadAction<any>) => {
      state.elements = state.elements.filter(element => element.id !== action.payload)
    },
    setActive: (state, action: PayloadAction<any>) => {
      state.active = action.payload
      console.log(state.active)
    }
  }
})

export const { addElement, selectElement, setOverElement, deleteElement, setActive } = constructorSlice.actions

export default constructorSlice.reducer
