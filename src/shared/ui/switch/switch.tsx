import { Typography, useTheme } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import React from 'react'
import { useAppDispatch } from 'app/store'
import { setActive } from 'app/store/constructor'
import ConstructionPicture from 'shared/icons/construction'
import EyePicture from 'shared/icons/eye'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    fontWeight: '500',
    color: theme.palette.text.primary,
    '&.MuiToggleButton-standard': {
      borderRadius: '5px',
      backgroundColor: '#F3F4F6'
    },
    '&.Mui-selected': {
      border: '1px solid #E2E3E5',
      backgroundColor: '#FFFFFF',
      '& > svg': {
        '& path': {
          stroke: '#5D5FEF'
        }
      }
    }
  }
}))

function ToggleSwitcher (): JSX.Element {
  const theme = useTheme()
  const [alignment, setAlignment] = React.useState('left')
  const dispatch = useAppDispatch()

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string): void => {
    setAlignment(newAlignment)
  }

  const onClick = (value: boolean): any => {
    dispatch(setActive(value))
  }

  return (
    <Paper
        elevation={0}
        sx={{
          display: 'flex',
          width: '243px',
          flexWrap: 'wrap',
          backgroundColor: theme.palette.secondary.light,
          borderRadius: '5px',
          padding: '1px'
        }}
      >
        <StyledToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={{
            width: '100%',
            height: '38px'
          }}
        >
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
        </StyledToggleButtonGroup>
      </Paper>
  )
}

export default ToggleSwitcher
