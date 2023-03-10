import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from 'app/store'
import { addElement, deleteElement, selectElement } from 'app/store/store'

const StyledPaper = styled(Paper)(({ theme }) => ({
  '&.MuiPaper-elevation': {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
  }
}))

interface DragBlockPrps {
  children: JSX.Element | JSX.Element[]
  height?: number
  width?: number
  id: string
}

function DragBlock ({ children, width, height, id }: DragBlockPrps): JSX.Element {
  // const theme = useTheme()
  const dndRef = useRef(null)
  const dispatch = useAppDispatch()
  const selectedElementId = useAppSelector(state => state.elements.selectedElementId)

  const onDragStart = (element: any): any => {
    dispatch(selectElement(element.id))
    // element.style.opacity = '50%'
  }

  const onDoubleClick = (element: any): any => {
    dispatch(deleteElement(element.id))
  }

  const onDrop = (e: any, element: any): any => {
    e.stopPropagation()
    dispatch(addElement({ selectedId: selectedElementId, overId: element.id }))
    dispatch(selectElement(null))
  }

  const onDragOver = (e: any): any => {
    // e.stopPrapagation()
    e.preventDefault()
  }

  return (
    <div
      id={id}
      draggable
      ref={dndRef}
      onDragStart={() => onDragStart(dndRef.current)}
      onDoubleClick={() => onDoubleClick(dndRef.current)}
      onDrop={(e) => onDrop(e, dndRef.current)}
      onDragOver={onDragOver}
    >
      <StyledPaper
        variant="elevation"
      >
        {children}
      </StyledPaper>
    </div>
  )
}

export default DragBlock
