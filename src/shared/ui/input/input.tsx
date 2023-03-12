import OutlinedInput from '@mui/material/OutlinedInput'
import React, { useEffect, useState } from 'react'

interface InputPorps {
  value: string
  fontSize: number
}

function Input ({ value, fontSize }: InputPorps): JSX.Element {
  return (
    <OutlinedInput
      value={value}
      readOnly
      sx={{
        fontSize: `${fontSize}px`
      }}
    />
  )
}

export default Input
