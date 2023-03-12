import { Typography, useTheme } from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton'
import React from 'react'
import { useAppDispatch } from 'app/store'
import { setActive } from 'app/store/constructor'
import ConstructionPicture from 'shared/icons/construction'
import EyePicture from 'shared/icons/eye'
import { restCalculator } from 'app/store/calculator'
import ToggleSwitcher from 'shared/ui/switch/switch'

function ModeSwitcher (): JSX.Element {
  const [alignment, setAlignment] = React.useState('right')
  const dispatch = useAppDispatch()

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string): void => {
    setAlignment(newAlignment)
  }

  const onClick = (value: boolean): any => {
    dispatch(setActive(value))
    dispatch(restCalculator())
  }

  return (
    <ToggleSwitcher onChange={handleAlignment} value={alignment}>
        <ToggleButton
            value="left"
            onClick={() => onClick(false)}
            sx={{
              border: '1px solid #E2E3E5',
              borderRadius: '5px',
              background: '#FFFFFF',
              width: '100%'
            }}
          >
            <EyePicture/>
            <Typography variant='body1' sx={{ textTransform: 'none', marginLeft: '10px' }}>Runtime</Typography>
          </ToggleButton>
          <ToggleButton
            value="right"
            onClick={() => onClick(true)}
            sx={{
              border: '1px solid #E2E3E5',
              background: '#FFFFFF',
              width: '100%'
            }}
          >
            <ConstructionPicture/>
            <Typography variant='body1' sx={{ textTransform: 'none', marginLeft: '10px' }}>Constructor</Typography>
        </ToggleButton>
    
    </ToggleSwitcher>
          
  )
}

export default ModeSwitcher
