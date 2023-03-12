import { createTheme } from '@mui/material'

export const rootTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            fontSize: '14px'
          },
          '&.MuiTypography-body2': {
            fontSize: '12px'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          input: {
            textAlign: 'right'
          },
          height: '100%',
          border: 'none',
          fontWeight: '800',
          fontSize: '36px',
          backgroundColor: '#F3F4F6',
          lineHeight: '44px',
          borderRadius: '6px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            }
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '100%',
          minWidth: 'min-content',
          borderRadius: '6px',
          border: '1px solid #E2E3E5',
          '&:hover': {
            border: '2px solid #5D5FEF',
            backgroundColor: 'transparent'
          }
        }
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#5D5FEF'
            }
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: '#000000'
          }
        }
      ]
    }
  },
  palette: {
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    },
    primary: {
      main: '#5D5FEF',
      light: '#F0F9FF'
    },
    secondary: {
      dark: '#C4C4C4',
      main: '#E2E3E5',
      light: '#F3F4F6'
    }
  },
  spacing: [0, 4, 8, 12],
  typography: {
    fontFamily: 'Inter'
  }
})
