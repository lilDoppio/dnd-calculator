import { Box, Typography, useTheme } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'app/store'
import { addElement, selectElement } from 'app/store/constructor'
import type React from 'react'
import PlusPicture from 'shared/icons/plus'

const EmptyContainer = (): JSX.Element => {
  const theme = useTheme()
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        border: `2px dashed ${theme.palette.secondary.dark}`, 
        borderRadius: '6px', 
        height: '448px', 
        width: '243px' 
      }}
    >
      <PlusPicture/>
      <Typography 
        variant='body1' 
        mt={theme.spacing(3)} 
        color='primary.main'
      >
        Перетащите сюда
      </Typography>
      <Typography 
        variant='body2' 
        color='primary.dark'
        sx={{ 
            textAlign: 'center' 
        }}
      >
        любой элемент<br/>из левой панели
      </Typography>
    </Box>
  )
}

const DropContainer = () => {
  const dispatch = useAppDispatch()
  const elements = useAppSelector(state => state.elements.elements)
  const selectedElementId = useAppSelector(state => state.elements.selectedElementId)

  const onDrop = (): void => {
    dispatch(addElement({ selectedId: selectedElementId, overId: null }))
    dispatch(selectElement(null))
  }

  const onDragOver = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
  }

    return (
        <Box
          sx={{ 
            height: '448px', 
            width: '243px' 
          }}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          {(elements.length > 0)
            ? elements.map(element => {
              return (
              <Box key={element.id}>
                {element.component}
              </Box>
              )
            })
            : <EmptyContainer/>}
        </Box>
    )
}

export default DropContainer
