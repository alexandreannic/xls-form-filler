import {ReactNode} from 'react'
import {alpha, Box, useTheme} from '@mui/material'

export type QuestionLayoutProps = {
  label: string
  hint?: string
  error?: string
  children?: ReactNode
}

export const QuestionLayout = ({
  label,
  hint,
  children,
  error,
}: QuestionLayoutProps) => {
  const t = useTheme()
  return (
    <Box sx={{
      borderRadius: t.shape.borderRadius + 'px',
      background: error ? alpha(t.palette.error.light, .15) : t.palette.background.paper,
      // border: error ? `2px solid ${t.palette.error.main}` : undefined,
      borderLeft: error ? `2px solid ${t.palette.error.main}` : undefined,
      py: 1,
      px: 2,
      mb: .5,
      '&:not(:first-of-type)': {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
      },
      '&:not(:last-of-type)': {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
      }
    }}>
      <Box sx={{mb: children ? 1 : 0}}>
        <Box sx={{fontWeight: t.typography.fontWeightBold}}>{label}</Box>
        {hint && <Box sx={{color: t.palette.text.secondary}}>{hint}</Box>}
      </Box>
      {children}
      <Box sx={{color: t.palette.error.main}}>{error}</Box>
    </Box>
  )
}