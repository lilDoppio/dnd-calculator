import OutlinedInput from '@mui/material/OutlinedInput'
import React, { useEffect, useState } from 'react'

interface InputPorps {
  value: string
}

function Input ({ value }: InputPorps): JSX.Element {
  const [fontSize, setFontSize] = useState(36)

  useEffect(() => {
    if (value.length >= 17) {
      setFontSize(16)
    } else if (value.length > 8) {
      setFontSize(33 - value.length)
    } else {
      setFontSize(36)
    }
  }, [value])

  return (
    <OutlinedInput
      value={value}
      readOnly
      sx={{
        cursor: 'pointer',
        fontSize: `${fontSize}px`
      }}
    />
  )
}

export default Input
