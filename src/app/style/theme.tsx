import { createTheme } from '@mui/material'
const paletteTheme = createTheme({
  palette: {
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    },
    primary: {
      dark: '#6B7280',
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

export const rootTheme = createTheme(paletteTheme, {
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
            textAlign: 'right',
            cursor: 'default'
          },
          height: '100%',
          border: 'none',
          fontWeight: '800',
          fontSize: '36px',
          backgroundColor: paletteTheme.palette.secondary.light,
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
          border: `1px solid ${paletteTheme.palette.secondary.main}`,
          '&:hover': {
            border: `2px solid ${paletteTheme.palette.primary.main}`,
            backgroundColor: 'transparent'
          }
        }
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: paletteTheme.palette.text.secondary,
            '&:hover': {
              backgroundColor: paletteTheme.palette.primary.main
            }
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: paletteTheme.palette.text.primary
          }
        }
      ]
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          '& .MuiToggleButtonGroup-grouped': {
            margin: paletteTheme.spacing(0),
            border: 0,
            fontWeight: '500',
            color: paletteTheme.palette.text.primary,
            '&.MuiToggleButton-standard': {
              borderRadius: '5px',
              backgroundColor: paletteTheme.palette.secondary.light
            },
            '&.Mui-selected': {
              border: `1px solid ${paletteTheme.palette.secondary.main}`,
              backgroundColor: paletteTheme.palette.text.secondary,
              '& > svg': {
                '& path': {
                  stroke: paletteTheme.palette.primary.main
                }
              }
            }
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiPaper-elevation3': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
          }
        }
      }
    }
  }
})
