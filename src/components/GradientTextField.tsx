import { TextField } from '@mui/material'
import styled from '@emotion/styled'

const GradientBorderTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    position: 'relative',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '& .MuiInputBase-input': {
      position: 'relative',
      zIndex: 1,
      backgroundColor: '#151515',
      borderRadius: '5px',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      start: 0,
      //   top: '1px', // adjusted to match the height of the actual border
      width: 'calc(100% + 2px)',
      height: 'calc(100% + 2px)', // adjusted to match the height of the actual border
      left: '-3px',
      border: '2px solid',
      WebkitBorderRadius: '5px',
      borderColor: 'transparent',
      borderRadius: 'inherit',
      backgroundImage: 'linear-gradient(45deg, #FE6B8B, #FF8E53)', // your gradient colors here
      zIndex: 0,
    },
  },
  '& .MuiFormLabel-root': {
    zIndex: 2,
  },
  '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
    transform: 'translate(14px, -20px) scale(0.75)',
  },
})

export default GradientBorderTextField
