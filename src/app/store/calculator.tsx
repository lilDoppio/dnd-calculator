import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
// import React from 'react'

// enum CalculatorOperation {
//   '/' = 1,
//   '*' = 2,
//   '-' = 3,
//   '+' = 4
// }

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
      if (Boolean(state.firstNumber) && Boolean(state.operation)) {
        state.secondNumber = state.secondNumber.concat(action.payload)
        state.output = state.secondNumber
      } else {
        state.firstNumber = state.firstNumber.concat(action.payload)
        state.output = state.firstNumber
      }
    },
    addOperation: (state, action: PayloadAction<CalculatorOperation>) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!state.firstNumber) {
        state.firstNumber = state.lastOutput
      }
      state.operation = action.payload
    },
    operationConclusion: (state) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (state.operation && state.firstNumber && state.secondNumber) {
        const firstNumber = parseFloat(state.firstNumber.replace(',', '.'))
        const secondNumber = parseFloat(state.secondNumber.replace(',', '.'))

        console.log(firstNumber, state.operation, secondNumber)
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
        console.log('newNumber', newNumber)
        if (newNumber.split('.')[1]?.length > 15) {
          console.log('newNumber', newNumber.split('.')[1])
          state.output = (parseFloat(newNumber).toFixed(15)).toString()
        } else {
          state.output = newNumber
        }
        state.lastOutput = state.output
        state.firstNumber = ''
        state.secondNumber = ''
        state.operation = null
      }
    }
  }
})

export const { addDigit, addOperation, operationConclusion } = calculatorSlice.actions

export default calculatorSlice.reducer
