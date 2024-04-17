import * as React from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

export default function SizesChips() {
  return (
    <Stack  direction="row" spacing={1}>
      <Chip label="Java" size="medium"  sx={{borderRadius:"4px",backgroundColor:" #EBF0F7",fontFamily:"Open Sans", fontSize:"12px"}} />
    </Stack>
  )
}
