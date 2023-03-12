import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type CalculatorOperation = '+' | '-' | '/' | 'x' | null

interface ElementsState {
  output: string
  lastOutput: string
  firstNumber: string
  secondNumber: string
  operation: CalculatorOperation
}

const initialState: ElementsState = {
  output: '0',
  lastOutput: '',
  firstNumber: '',
  secondNumber: '',
  operation: null
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit: (state, action: PayloadAction<string>) => {
      if (state.firstNumber && state.operation) {
        if (state.secondNumber === '0') {
          state.secondNumber = action.payload
        } else {
          state.secondNumber = state.secondNumber.concat(action.payload)
        }
        state.output = state.secondNumber
      } else {
        if (state.firstNumber === '0') {
          state.firstNumber = action.payload
        } else {        
          state.firstNumber = state.firstNumber.concat(action.payload)
        }
        state.output = state.firstNumber
      }
    },
    addOperation: (state, action: PayloadAction<CalculatorOperation>) => {
      if (!state.firstNumber) {
        state.firstNumber = state.lastOutput
      }
      if (state.firstNumber) {
        state.operation = action.payload
      }
    },
    operationConclusion: (state) => {
      if (state.operation && state.firstNumber && state.secondNumber) {
        const firstNumber = parseFloat(state.firstNumber.replace(',', '.'))
        const secondNumber = parseFloat(state.secondNumber.replace(',', '.'))

        let newNumber = ''
        if (state.operation === '+') {
          newNumber = (firstNumber + secondNumber).toString()
        }
        if (state.operation === '-') {
          newNumber = (firstNumber - secondNumber).toString()
        }
        if (state.operation === 'x') {
          newNumber = (firstNumber * secondNumber).toString()
        }
        if (state.operation === '/') {
          if (secondNumber === 0) {
            newNumber = 'Не определено'
          } else {
            newNumber = (firstNumber / secondNumber).toString()
          }
        }
        if (newNumber.split('.')[1]?.length > 15) {
          state.output = (parseFloat(newNumber).toFixed(15)).toString()
        } else {
          state.output = newNumber
        }
        state.lastOutput = state.output
        state.firstNumber = ''
        state.secondNumber = ''
        state.operation = null
      }
    },
    restCalculator: (state) => {
      state.output = '0'
      state.firstNumber = ''
      state.secondNumber = ''
      state.operation = null
    },
  }
})

export const { addDigit, addOperation, operationConclusion, restCalculator } = calculatorSlice.actions

export default calculatorSlice.reducer
