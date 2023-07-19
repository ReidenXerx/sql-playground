import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#6E6E6F', // this color will be used for all buttons
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#6E6E6F', // color for text
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#6E6E6F', // color for label
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#6E6E6F', // color for helper text
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white', // this color will be used for all buttons
        },
      },
    },
  },
})

export default theme
