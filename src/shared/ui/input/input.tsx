import OutlinedInput from '@mui/material/OutlinedInput'
import React from 'react'

function Input (): JSX.Element {
  return (
    <OutlinedInput
      value='0'
      readOnly
      sx={{
        cursor: 'pointer'
      }}
    />
  )
}

export default Input
