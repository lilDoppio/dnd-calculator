import React, { useEffect, useState } from 'react'
import Input from 'shared/ui/input/input'

interface InputPorps {
  value: string
}

function Output ({ value }: InputPorps): JSX.Element {
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
    <Input value={value} fontSize={fontSize}/>
  )
}

export default Output