// App.tsx
import './App.css'
import { ParentContainer } from '@components/ParentContainer'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { QueryConstructor } from '@components/QueryConstructor'
import { Box, Typography } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = () => (
  <ThemeProvider theme={theme}>
    <ParentContainer>
      <Box>
        <Typography
          paddingTop="50px"
          paddingBottom="100px"
          variant="h1"
          sx={{
            color: 'white',
            '& span': {
              color: '#FF8E53', // Customize the color for 'S'
            },
            '& .ql': {
              color: '#FE6B8B', // Customize the color for 'Q'
            },
            '& .pl': {
              color: '#13F200', // Customize the color for 'L'
            },
          }}
        >
          <span>S</span>
          <span className="ql">Q</span>
          <span className="pl">L</span> playground
        </Typography>
      </Box>

      <QueryConstructor />
    </ParentContainer>
    <ToastContainer />
  </ThemeProvider>
)

export default App
