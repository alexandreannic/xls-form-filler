import {ReactNode, useState} from 'react'
import {Box, Collapse, Icon, IconButton, useTheme} from '@mui/material'
import {Title} from './Title.tsx'

export const GroupLayout = ({
  label,
  hint,
  children,
}: {
  label?: string,
  hint?: string,
  children: ReactNode
}) => {
  const t = useTheme()
  const [open, setOpen] = useState(true)
  return (
    <Box sx={{position: 'relative', mb: 2,}}>
      <Box sx={{display: 'flex', alignItems: 'center', mb: 1,}}>
        <IconButton size="small" onClick={() => setOpen(_ => !_)}>
          <Icon>{open ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}</Icon>
        </IconButton>
        <Title>{label}</Title>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{
          position: 'relative',
          pl: 1,
          ml: '14px',
          '&:before': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            content: '" "',
            width: '1px',
            background: t.palette.divider,
          }
        }}>
          {children}
        </Box>
      </Collapse>
    </Box>
  )
}