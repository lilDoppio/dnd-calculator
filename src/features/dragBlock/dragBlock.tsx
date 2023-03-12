import styled from '@emotion/styled'
import { Box, Paper, useTheme } from '@mui/material'
import type React from 'react'
import { useAppDispatch, useAppSelector } from 'app/store'
import { addElement, deleteElement, selectElement, setOverElement } from 'app/store/constructor'
import RuntimeDivider from 'shared/icons/runtimeDivider'
// import { useState } from 'react'

interface DragBlockPrps {
  children: JSX.Element | JSX.Element[]
  height?: number
  width?: number
  id?: string
  inList: boolean
  inConstructor: boolean
}

function DragBlock ({ children, width, height, id, inList, inConstructor }: DragBlockPrps): JSX.Element {
  // const [showOvwrLine, setShowOverLine] = useState(false)
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const selectedElementId = useAppSelector(state => state.elements.selectedElementId)
  const overElementId = useAppSelector(state => state.elements.overElementId)
  const isConstructorActive = useAppSelector(state => state.elements.active)
  const onDragStart = (): void => {
    dispatch(selectElement(id))
  }

  const onDragEnd = (): void => {    
    dispatch(setOverElement(null))
  }

  const onDoubleClick = (): void => {
    if (isConstructorActive) {
      dispatch(deleteElement(id))
    }
  }

  const onDrop = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation()
    console.log('e', e, e.target)
    if (!inConstructor) {
      dispatch(addElement({ selectedId: selectedElementId, overId: id }))
    }
    dispatch(selectElement(null))
  }

  const onDragOver = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation()
    e.preventDefault()
    if (!inConstructor) {
      dispatch(setOverElement(id))
    }
  }

  const onDragLeave = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <Box
      id={id}
      draggable={id === '1' ? isConstructorActive && inConstructor : isConstructorActive }
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDoubleClick={onDoubleClick}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {overElementId === id && !inConstructor && <RuntimeDivider/>}
      <Paper
        variant='elevation'
        elevation={inList ? 0 : 3}
        sx={{
          padding: theme.spacing(1),
          width: width != null ? `${width}px` : '100%',
          height: height != null ? `${height}px` : '100%',
          opacity: inConstructor && inList ? '0.5' : '1'
        }}
      >
        {children}
      </Paper>
    </Box>
  )
}

export default DragBlock
