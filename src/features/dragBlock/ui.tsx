import styled from '@emotion/styled'
import { Paper, useTheme } from '@mui/material'
import type React from 'react'
import { useAppDispatch, useAppSelector } from 'app/store'
import { addElement, deleteElement, selectElement, setOverElement } from 'app/store/constructor'
import RuntimeDivider from 'shared/icons/runtimeDivider'

const StyledPaper = styled(Paper)(({ theme }) => ({
  '&.MuiPaper-elevation3': {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
  }
}))

interface DragBlockPrps {
  children: JSX.Element | JSX.Element[]
  height?: number
  width?: number
  id: string
  inList: boolean
  inConstructor: boolean
}

function DragBlock ({ children, width, height, id, inList, inConstructor }: DragBlockPrps): JSX.Element {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const selectedElementId = useAppSelector(state => state.elements.selectedElementId)
  const overElementId = useAppSelector(state => state.elements.overElementId)
  const isConstructorActive = Boolean(useAppSelector(state => state.elements.active))
  const onDragStart = (): void => {
    dispatch(selectElement(id))
  }

  const onDoubleClick = (): void => {
    if (isConstructorActive) {
      dispatch(deleteElement(id))
    }
  }

  const onDrop = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation()
    dispatch(addElement({ selectedId: selectedElementId, overId: id }))
    dispatch(selectElement(null))
    dispatch(setOverElement(null))
  }

  const onDragOver = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(setOverElement(id))
  }

  const onDragLeave = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation()
    e.preventDefault()
    // setOverElement(false)
  }

  return (
    <div
      id={id}
      draggable={id === '1' ? isConstructorActive && inConstructor : isConstructorActive }
      onDragStart={onDragStart}
      onDoubleClick={onDoubleClick}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {overElementId === id && !inConstructor && <RuntimeDivider/>}
      <StyledPaper
        variant={'elevation'}
        elevation={inList ? 0 : 3}
        sx={{
          padding: theme.spacing(1),
          width: width != null ? `${width}px` : '100%',
          height: height != null ? `${height}px` : '100%',
          opacity: inConstructor && inList ? '0.5' : '1'
        }}
      >
        {children}
      </StyledPaper>
    </div>
  )
}

export default DragBlock
