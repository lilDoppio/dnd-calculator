import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from 'app'
import store from 'app/store'
import { rootTheme } from 'app/style/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <ThemeProvider theme={rootTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
)
